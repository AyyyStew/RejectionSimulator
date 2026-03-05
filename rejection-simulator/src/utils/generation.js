import {
  emailAddressList,
  emailTopLevelDomainList,
  subjectTemplates,
  positions,
  bodyTemplates,
  choice,
  weightedChoice,
  generate_corporate_name,
  generate_mom_and_pop_name,
  generate_signature,
} from "@/utils/choices";

import verbCorpus from "verb-corpus";
const { complete } = verbCorpus.default || verbCorpus;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function removeRandomVowel(word) {
  // Find all indices of vowels
  const vowels = "aeiouAEIOU";
  const vowelIndices = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelIndices.push(i);
    }
  }
  // If no vowels, return the original word
  if (vowelIndices.length === 0) return word;

  // Pick a random vowel index
  const idxToRemove =
    vowelIndices[Math.floor(Math.random() * vowelIndices.length)];
  // Remove it
  return word.slice(0, idxToRemove) + word.slice(idxToRemove + 1);
}

function removeNVowels(word, n) {
  let w = word;
  for (let i = 0; i < n; i++) {
    w = removeRandomVowel(w);
  }
  return w;
}

function generate_startup_name() {
  let word = choice(complete);
  let name = removeNVowels(word, randomInt(1, 3));
  name = name.charAt(0).toUpperCase() + String(name).slice(1);
  if (Math.random() > 0.5) {
    name = name.toUpperCase();
  }

  return name;
}

function generate_company_name(type) {
  if (type == "startup") {
    return generate_startup_name();
  } else if (type == "corporate") {
    return generate_corporate_name();
  } else if (type == "momAndPop") {
    return generate_mom_and_pop_name();
  } else {
    throw Error("Not a valid company type");
  }
}

function generate_email_address(company_name) {
  const clean_name = company_name.replace(/[^a-zA-Z0-9]/g, "");

  return `${choice(emailAddressList)}@${clean_name.toLowerCase()}.${choice(
    emailTopLevelDomainList,
  )}`;
}

function generate_subject_line(data) {
  const templateObj = choice(subjectTemplates);

  // Optionally, check if all required fields are present
  for (const field of templateObj.fields) {
    if (!(field in data)) {
      throw new Error(`Missing field: ${field}`);
    }
  }

  return templateObj.fn(data);
}

function generate_body(data) {
  const templateObj = choice(bodyTemplates);
  for (const field of templateObj.fields) {
    if (!(field in data)) throw new Error(`Missing field: ${field}`);
  }
  return templateObj.fn(data) + generate_signature(data);
}

export function generate() {
  const companyTypes = [
    { name: "startup", weight: 3 },
    { name: "corporate", weight: 2 },
    { name: "momAndPop", weight: 1 },
  ];

  const company_name = generate_company_name(weightedChoice(companyTypes));
  const email_address = generate_email_address(company_name);
  const position = choice(positions);
  const id = randomInt(1, 9999);
  const info = {
    company: company_name,
    position: position,
    id: id,
  };

  const subject = generate_subject_line(info);
  const body = generate_body(info);

  return { email_address, subject, body };
}
