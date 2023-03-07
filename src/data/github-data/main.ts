import {GithubData} from "../dataDef";
import {getReadmeData} from "./readmeData";

export async function getAllGithubData(username: string) {
  // Add all function calls here to collect all github data 
  // in one place: 
  const {about, skills}= await getReadmeData(username);
  const githubData : GithubData = {about, skills};
  return githubData;
}