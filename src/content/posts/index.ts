import { githubPagesDeploy } from "./github-pages-deploy";
import { personalKnowledgeBase } from "./personal-knowledge-base";
import { reactCleanBlog } from "./react-clean-blog";
import { web3dShowcase } from "./web-3d-showcase";

export const posts = [
  reactCleanBlog,
  githubPagesDeploy,
  personalKnowledgeBase,
  web3dShowcase
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
