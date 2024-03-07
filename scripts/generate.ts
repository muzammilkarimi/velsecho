import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Redis } from "@upstash/redis";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";
async function generateEmbeddings() {
  const vectorStore = await getVectorStore();
  (await getEmbeddingsCollection()).deleteMany({});
  const loader = new CheerioWebBaseLoader(
    "https://vistas.ac.in/school-of-engineering-fees-structure/",
  );

  const docs = (await loader.load()).map((doc) => {
    const url = doc.metadata.source;

    const pageContentTrimmed = doc.pageContent
      .replace(/^import.*$/gm, "") // Remove all import statements
      .replace(/ {[^}]*}/gm, "") // Remove all className props
      .replace(/^\s*[\r]/gm, "") // remove empty lines
      .trim();

    return {
      pageContent: pageContentTrimmed,
      metadata: { url },
    };
  });
  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
  const splitDocs = await splitter.splitDocuments(docs);
  //   console.log(splitDocs);
  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
