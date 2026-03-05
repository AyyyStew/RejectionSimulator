export function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function maybe(val, probability = 0.5) {
  return Math.random() < probability ? val : null;
}

// Email prefixes (the part before @)
export const emailAddressList = [
  "info",
  "contact",
  "hello",
  "support",
  "hr",
  "careers",
  "jobs",
  "noreply",
  "automated_response",
  "notifications",
  "applications",
  "talent",
  "team",
  "recruitment",
  "office",
  "admin",
  "enquiries",
  "feedback",
  "service",
  "mailroom",
];

const signatoryNames = [
  "The Hiring Team",
  "The Talent Acquisition Team",
  "The People Operations Team",
  "The Recruiting Team",
  "HR",
  "The Selection Committee",
  "Management",
  "The Hiring Committee",
  "People & Culture",
  "The Team at",
];

// Email suffixes (the TLD part)
export const emailTopLevelDomainList = [
  "com",
  "net",
  "org",
  "io",
  "co",
  "ai",
  "dev",
  "xyz",
  "app",
  "cloud",
  "biz",
  "pro",
];

export const subjectTemplates = [
  {
    fn: ({ company }) => `Thank you for applying to ${company}`,
    fields: ["company"],
  },
  {
    fn: ({ position, company }) =>
      `Update regarding your application for ${position} at ${company}`,
    fields: ["position", "company"],
  },
  {
    fn: ({ company, id }) => `Your Application #${id} – ${company}`,
    fields: ["company", "id"],
  },
  {
    fn: ({ position, company }) =>
      `Automated Response: ${position} application at ${company}`,
    fields: ["position", "company"],
  },
  {
    fn: ({ company }) => `Application Status – ${company}`,
    fields: ["company"],
  },
  {
    fn: ({ company }) => `Update From ${company} Careers`,
    fields: ["company"],
  },
  {
    fn: ({ position, company }) => `Your ${position} Application at ${company}`,
    fields: ["position", "company"],
  },
  {
    fn: ({ id }) => `Regarding Your Application (#${id})`,
    fields: ["id"],
  },
  {
    fn: ({ company }) => `Application Process Update – ${company}`,
    fields: ["company"],
  },
  {
    fn: ({ position, company }) =>
      `Thank You for Your Interest in ${position} at ${company}`,
    fields: ["position", "company"],
  },
  {
    fn: ({ company }) => `Notice: Application Update From ${company}`,
    fields: ["company"],
  },
  {
    fn: ({ position, id }) => `${position} Application Status – Ref: ${id}`,
    fields: ["position", "id"],
  },
  {
    fn: ({ company, id }) => `Notification: ${company} Application #${id}`,
    fields: ["company", "id"],
  },
  {
    fn: ({ company }) => `Automated Message: Recruitment at ${company}`,
    fields: ["company"],
  },
  {
    fn: ({ company, position }) =>
      `RE: Your Application for ${position} at ${company}`,
    fields: ["position", "company"],
  },
];

export const positions = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",
  "DevOps Specialist",
  "Product Manager",
  "QA Analyst",
  "UI/UX Designer",
  "Mobile Developer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Cloud Architect",
  "Solutions Engineer",
  "Technical Writer",
  "Business Analyst",
  "Scrum Master",
  "Support Specialist",
  "IT Administrator",
  "Growth Hacker",
  "Customer Success Manager",
  "Content Strategist",
  "SEO Specialist",
  "Community Manager",
  "Head of Remote",
  "Vibe Coordinator",
  "Disruption Evangelist",
  "Chief Happiness Officer",
  "Innovation Lead",
  "Blockchain Analyst",
  "Crypto Influencer",
  "Visionary Futurist",
  "Social Media Wizard",
  "People Operations Lead",
  "Brand Storyteller",
  "Engagement Architect",
  "Platform Evangelist",
  "Web3 Explorer",
  "AI Prompt Engineer",
  "Infrastructure Magician",
  "Digital Alchemist",
  "Automation Guru",
  "Personalization Expert",
  "Sustainability Consultant",
  "Data Wrangler",
  "Partner Integration Lead",
  "Bug Bounty Hunter",
  "Customer Experience Champion",
  "Culture Czar",
  "No-Code Specialist",
  "Onboarding Sherpa",
  "Chief Disappointment Officer",
];

const closers = {
  corporate: [
    () =>
      [
        `We will keep your resume on file.`,
        maybe(`Please do not reply to this email.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Thank you again for your time and interest.`,
        maybe(`We carefully reviewed your submission.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `We encourage you to apply again for future openings that match your skills.`,
        maybe(`Please monitor our careers page for updates.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    ({ company }) =>
      [
        `We appreciate your consideration of ${company} in your job search.`,
        maybe(`Your time and interest in our company mean a lot.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () => `Your effort in applying is sincerely appreciated.`,

    () =>
      [
        `Thank you for taking the time to submit your application.`,
        maybe(`We appreciate the effort you put into it.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),
  ],

  enthusiastic: [
    () =>
      [
        `We hope you find a position that truly excites you.`,
        maybe(`We believe you will.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Wishing you success in your next adventure.`,
        maybe(`We mean that sincerely.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `We hope your next opportunity brings you great success.`,
        maybe(`You deserve something amazing.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `We hope your career path leads to exciting opportunities.`,
        maybe(`Genuinely.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `May you find a role that truly matches your skills and passions.`,
        maybe(`We're rooting for you out there.`, 0.6),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () => `We hope you continue to pursue your career goals with enthusiasm.`,
  ],

  passiveAggressive: [
    () =>
      [
        `We wish you all the best in your future endeavors.`,
        maybe(`Truly.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `We hope our paths may cross again someday.`,
        maybe(`Though we make no promises.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Best of luck in your search.`,
        maybe(`You may find it takes some time.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `We wish you all the best in finding a role that suits your talents.`,
        maybe(`Whatever those may be.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () => `Please know that we carefully reviewed your submission.`,
  ],

  absurdist: [
    () =>
      [
        `We hope the right opportunity finds you soon.`,
        maybe(`It will know where to look.`, 0.6),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Best wishes as you continue your professional journey.`,
        maybe(`Watch your step.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `We hope you find the right opportunity soon.`,
        maybe(`It has been circling for some time.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Your time and interest in our company mean a lot.`,
        maybe(`To someone. Possibly Gerald.`, 0.6),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () => `We encourage you to stay connected. We will be watching.`,
  ],
};

const openers = [
  ({ position, company }) =>
    `Thank you for applying for the ${position} position at ${company}.`,
  ({ position, company }) =>
    `We appreciate your interest in joining the ${company} team as a ${position}.`,
  ({ company }) =>
    `On behalf of the entire ${company} hiring team, thank you for your application.`,
  ({ position, company }) =>
    `We sincerely value the time and effort you invested in applying for the ${position} role at ${company}.`,
  ({ company }) =>
    `Your application to ${company} has been reviewed with care, and we want to thank you for considering us.`,
  ({ position }) =>
    `We received your application for the ${position} role and appreciate your interest.`,
  ({ position, company }) =>
    `Thank you for your interest in the ${position} role at ${company}.`,
  ({ position, company }) =>
    `We truly appreciate you considering ${company} for your next career move as a ${position}.`,
  ({ company }) =>
    `Your application to ${company} has been received and reviewed with care.`,
  ({ position }) =>
    `It was a pleasure to see your application for the ${position} position.`,
  ({ position, company }) =>
    `We’ve carefully reviewed your submission for the ${position} role at ${company}.`,
  ({ company }) =>
    `On behalf of ${company}'s hiring team, thank you for applying.`,
  ({ position }) =>
    `We value your interest in the ${position} opportunity at our company.`,
  ({ company }) =>
    `We are grateful for your application to ${company} and the effort you put in.`,
  ({ position, company }) =>
    `Your candidacy for the ${position} role at ${company} has been thoroughly reviewed.`,
  ({ position }) =>
    `We appreciate the time you invested in applying for the ${position} position.`,
  ({ company }) =>
    `The team at ${company} thanks you for submitting your application.`,
  ({ position, company }) =>
    `It’s always inspiring to see applicants like you for the ${position} role at ${company}.`,
  ({ position }) =>
    `Your application for the ${position} role has been received and appreciated.`,
  ({ company }) =>
    `Thank you for considering ${company} in your career journey.`,
  ({ position, company }) =>
    `We were excited to see your application for the ${position} opening at ${company}.`,
];

const reasons = {
  corporate: [
    ({ id }) =>
      [
        `After a thorough review of all applications, we have decided to move forward with candidates whose qualifications more closely align with our current needs.`,
        maybe(`Application #${id} has been closed in our system.`),
        maybe(
          `We received an exceptionally high volume of applicants for this role.`,
          0.4,
        ),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Due to the high volume of applicants, we are unable to move forward with your application at this time.`,
        maybe(`This decision is not a reflection of your qualifications.`),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    ({ id }) =>
      [
        `Our records indicate that application #${id} did not meet the minimum qualifications for this role.`,
        maybe(`Please review the job description for future reference.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Following deliberation among our hiring committee, we have elected to pursue other candidates.`,
        maybe(
          `This was a difficult decision given the strength of the applicant pool.`,
          0.5,
        ),
        maybe(
          `We will not be providing individual feedback on applications.`,
          0.4,
        ),
      ]
        .filter(Boolean)
        .join("</p><p>"),
    () =>
      `While your background is impressive, other candidates more closely match the specific requirements for this position.`,
    () =>
      `After careful consideration, we have chosen to move ahead with applicants whose experience more directly aligns with the role's responsibilities.`,
    () =>
      `After reviewing all applications, we have chosen candidates whose experience more closely aligns with our current needs.`,
    () =>
      `While your qualifications are impressive, other candidates better fit the specific requirements of this role.`,
    ({ id }) =>
      `Application #${id} did not meet the essential criteria for this position.`,
    () =>
      `Following a detailed review, we are moving forward with candidates whose profiles align more directly with the position.`,
    () =>
      `After evaluating all submissions, we have decided to pursue applicants whose skills more closely match our needs.`,
    () =>
      `We carefully considered your application, but other candidates better fit our current priorities.`,
    () =>
      `Your experience is valued, but we have selected candidates who more closely meet the role requirements.`,
    () =>
      `We had a highly competitive pool of applicants, and other candidates better matched the criteria.`,
    ({ id }) =>
      `Application #${id} was reviewed but did not satisfy the specific requirements for this position.`,
    () =>
      `However, we are proceeding with candidates whose background aligns more closely with the role.`,
    () =>
      `Despite a strong application, other candidates' experience more directly matched our objectives.`,
    () =>
      `We had to make difficult decisions based on the alignment of skills and experience with the position.`,
    () =>
      `After thorough evaluation, we have determined other candidates are a better fit at this time.`,
    () =>
      `Your application was considered carefully; however, the selected candidates better meet the role's demands.`,
    () =>
      `We reviewed your materials with attention, but we have moved forward with other candidates.`,
  ],
  enthusiastic: [
    ({ position }) =>
      [
        `We were absolutely blown away by the sheer number of incredible applicants for this ${position} role.`,
        maybe(`Truly, a once-in-a-generation talent pool.`, 0.6),
        `Unfortunately that means we won't be moving forward with your application.`,
        maybe(`We hope you understand.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    ({ company }) =>
      [
        `Honestly? We loved your application.`,
        maybe(`The team talked about it for minutes.`, 0.6),
        `But ${company} is on a really exciting journey right now, and we just don't think this is the right moment for you to join us on it.`,
        maybe(`We mean that in the best possible way.`, 0.5),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `You were SO close.`,
        maybe(`Like, really close.`, 0.7),
        `We just went in a different direction.`,
        maybe(`But wow.`, 0.6),
      ]
        .filter(Boolean)
        .join("</p><p>"),
    () =>
      `Your application was a joy to review! While we won’t be moving forward this time, we hope to see you apply again.`,
    ({ position }) =>
      `It was inspiring to see your passion for the ${position} role. Sadly, we’ve chosen another candidate, but we hope you keep shining!`,
    () =>
      `We genuinely enjoyed reviewing your submission. It was tough to choose, but another candidate was a slightly better fit.`,
    ({ position }) =>
      `Your application for the ${position} role stood out beautifully, but we’ve chosen another candidate this time.`,
    () =>
      `We were genuinely inspired by your submission. Unfortunately, we cannot move forward at this time.`,
    () =>
      `It was wonderful to see such talent applied here, but we had to make a tough choice.`,
    () =>
      `Your enthusiasm and skills impressed us! Sadly, another candidate was a slightly better match.`,
    ({ position }) =>
      `We loved seeing your passion for the ${position} role. It made the decision very difficult.`,
    () =>
      `The team was thrilled by your application, but we’ve gone in a different direction.`,
    ({ company }) =>
      `We genuinely appreciate the energy and creativity in your submission to ${company}.`,
    () =>
      `Your application brought smiles to our hiring team. Unfortunately, we can’t proceed.`,
    ({ position }) =>
      `The talent pool for the ${position} position was extraordinary, making this a hard choice.`,
    () =>
      `We were inspired by your background and skills. We hope you apply again!`,
    () =>
      `Your submission showed real potential. At this time, however, we are moving forward with another candidate.`,
    () =>
      `We enjoyed reviewing your experience and accomplishments, even though we will not move forward.`,
    ({ position }) =>
      `Seeing your application for ${position} was exciting, but the final decision went another way.`,
    () => `We truly appreciate your effort and enthusiasm in applying.`,
    ({ company }) =>
      `The team at ${company} was genuinely impressed by your application, but we had to choose another candidate.`,
  ],
  passiveAggressive: [
    () =>
      [
        `We did receive your application, yes.`,
        maybe(`It was reviewed.`, 0.5),
        `After doing so, we've decided not to proceed.`,
      ]
        .filter(Boolean)
        .join("</p><p>"),

    ({ position }) =>
      [
        `The ${position} role requires a very specific profile.`,
        maybe(`We're sure you understand.`, 0.6),
        maybe(`We'd rather not elaborate further.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `We noticed you applied to several positions at our company.`,
        maybe(`We appreciate the enthusiasm.`, 0.5),
        `We have made a decision regarding all of them.`,
      ]
        .filter(Boolean)
        .join("</p><p>"),

    ({ company }) =>
      [
        `${company} prides itself on finding the right fit.`,
        `On this occasion, that fit was not you.`,
        maybe(`We trust this comes as no surprise.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),
    () => `We received your application and have decided not to proceed.`,
    ({ position }) =>
      `The ${position} role requires specific qualifications that we did not find in your application.`,
    () =>
      `After careful consideration, we will not be moving forward with your application.`,
    ({ company }) =>
      `${company} prioritizes candidates who closely match our current needs.`,
    () => `Your application was noted, but we have chosen other candidates.`,
    ({ position }) =>
      `The requirements for the ${position} position are quite precise, and we’ve selected accordingly.`,
    () =>
      `We appreciate your interest, though your application did not meet our expectations.`,
    ({ company }) =>
      `Our decision reflects a focus on candidates who more closely match ${company}'s criteria.`,
    () =>
      `Thank you for applying. We have decided to proceed with other candidates.`,
    ({ position }) =>
      `We carefully reviewed your background but have selected candidates with more relevant experience for the ${position} role.`,
    () =>
      `Your qualifications were considered, but they did not align with our needs.`,
    ({ company }) =>
      `${company} must prioritize candidates who fit both the skills and culture we are seeking.`,
    () => `Despite your interest, we will not be moving forward at this time.`,
    ({ position }) =>
      `The ${position} role requires a certain experience profile. Other applicants met this more closely.`,
    () =>
      `After a thorough review, your application has not been selected for further consideration.`,
  ],
  absurdist: [
    () =>
      [
        `Unfortunately, our hiring algorithm detected an unfavorable vowel ratio in your cover letter.`,
        maybe(
          `We are unable to elaborate on the specifics of the algorithm.`,
          0.5,
        ),
        `We are unable to proceed.`,
      ]
        .filter(Boolean)
        .join("</p><p>"),

    ({ id }) =>
      [
        `Application #${id} was flagged during our standard astrology screening.`,
        maybe(`We do not make exceptions for rising signs.`, 0.6),
        `We wish you well under whatever sign you are.`,
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Our panel found your qualifications impressive.`,
        maybe(`There was a brief period of excitement.`, 0.5),
        `However, after consulting the I Ching, we are not able to extend an offer at this time.`,
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `A member of our hiring committee had a dream.`,
        maybe(`We don't want to get into it.`, 0.7),
        `We are not moving forward.`,
      ]
        .filter(Boolean)
        .join("</p><p>"),

    ({ position }) =>
      [
        `The ${position} seat has already been promised to someone named Gerald.`,
        maybe(`This has been planned for some time.`, 0.6),
        maybe(`Gerald is aware.`, 0.4),
      ]
        .filter(Boolean)
        .join("</p><p>"),

    () =>
      [
        `Due to an ongoing internal investigation we cannot discuss, all hiring decisions this quarter have been randomized.`,
        maybe(`This is compliant with all relevant regulations.`, 0.5),
        `You were not selected.`,
      ]
        .filter(Boolean)
        .join("</p><p>"),
    () =>
      `We used a Magic 8-Ball to make our hiring decisions. Sadly, it said “Don’t count on it.”`,
    () =>
      `Your application was considered by a council of squirrels. They advised us to hire elsewhere.`,
    () =>
      `After a ritual involving incense and rubber chickens, it was determined that this role is not for you.`,
    () =>
      `A council of hamsters was consulted. They have recommended another candidate.`,
    ({ id }) =>
      `Application #${id} triggered our "randomly reject 50%" protocol. Unfortunately, you were selected.`,
    () => `Our hiring matrix spun the wheel and it landed on “not this time.”`,
    ({ position }) =>
      `The ${position} role is currently reserved for someone who owns a red umbrella. Sadly, that is not you.`,
    () =>
      `After consulting the office oracle (a crystal ball), it was determined not to hire.`,
    () =>
      `A highly trained cat on the committee voted against this application.`,
    () =>
      `Your resume was impressive, but a magical ritual indicated otherwise.`,
    ({ id }) =>
      `Application #${id} was accidentally swapped with a sandwich. Decision: not proceeding.`,
    () => `We decoded the secret hiring scrolls. They were not in your favor.`,
    () => `A fortune cookie predicted a different career path for you.`,
    ({ position }) =>
      `The ${position} role is cursed this week. We cannot hire anyone. Sorry.`,
    () =>
      `Your application was sent through a quantum computer. The outcome: no.`,
    () => `A wizard on the committee advised against this hiring decision.`,
    () =>
      `The stars aligned, and unfortunately, they did not favor your application.`,
    () => `After intense deliberation with a rubber chicken, we must decline.`,
  ],
};

const tones = [
  { name: "corporate", weight: 80 },
  { name: "enthusiastic", weight: 10 },
  { name: "passiveAggressive", weight: 7 },
  { name: "absurdist", weight: 3 },
];

export function weightedChoice(weights) {
  const total = weights.reduce((sum, t) => sum + t.weight, 0);
  let r = Math.random() * total;
  for (const t of weights) {
    r -= t.weight;
    if (r <= 0) return t.name;
  }
}

const structures = [
  (tone, data) => {
    const opener = choice(openers)(data);
    const reason = choice(reasons[tone])(data);
    const closer = choice(closers[tone])(data);
    return `<p>${opener}</p><p>${reason}</p><p>${closer}</p>`;
  },
  (tone, data) => {
    const reason = choice(reasons[tone])(data);
    const closer = choice(closers[tone])(data);
    return `<p>${reason}</p><p>${closer}</p>`;
  },
  (tone, data) => {
    const opener = choice(openers)(data);
    const reason1 = choice(reasons[tone])(data);
    const reason2 = choice(reasons[weightedChoice(tones)])(data);
    const closer = choice(closers[tone])(data);
    return `<p>${opener}</p><p>${reason1}</p><p>${reason2}</p><p>${closer}</p>`;
  },
];

export const bodyTemplates = [
  {
    fields: ["company", "position", "id"],
    fn: (data) => {
      const tone = weightedChoice(tones);
      const structure = choice(structures);
      return structure(tone, data);
    },
  },
];

// Corporate word lists
const corporateFirstWords = [
  "Global",
  "Apex",
  "Nexus",
  "Summit",
  "Pinnacle",
  "Vantage",
  "Synergy",
  "Sterling",
  "Titan",
  "Vector",
  "Meridian",
  "Zenith",
  "Orbital",
  "Stratos",
];
const corporateSecondWords = [
  "Dyne",
  "Corp",
  "Works",
  "Group",
  "Partners",
  "Ventures",
  "Solutions",
  "Systems",
  "Dynamics",
  "Holdings",
  "Capital",
  "Consulting",
  "Industries",
];
const corporateSuffixes = [
  "ture",
  "ium",
  "ix",
  "ent",
  "on",
  "ex",
  "us",
  "al",
  "ance",
  "sis",
];
const corporateLastNames = [
  "Johnson",
  "Pierce",
  "Whitmore",
  "Hargrove",
  "Sterling",
  "Langford",
  "Ashworth",
  "Pemberton",
  "Caldwell",
  "Merritt",
  "Blackwell",
  "Weston",
];
const corporateAcronyms = [
  "HCM",
  "IBX",
  "GDX",
  "NPC",
  "VTX",
  "SLC",
  "APX",
  "MRD",
  "ZNT",
  "ORB",
  "STR",
  "TVC",
  "WGS",
  "BXL",
  "CLW",
];
const associateSuffixes = [
  "& Associates",
  "& Partners",
  "& Sons",
  "& Co.",
  "& Daughters",
];

// Mom & pop word lists
const firstNames = [
  "Carol",
  "Dave",
  "Linda",
  "Gary",
  "Donna",
  "Terry",
  "Sandy",
  "Dennis",
  "Judy",
  "Larry",
  "Brenda",
  "Frank",
  "Pam",
  "Rick",
  "Cindy",
  "Doug",
];
const familyNames = [
  "Henderson",
  "Murphy",
  "Kowalski",
  "Nguyen",
  "Okafor",
  "Petersen",
  "Delgado",
  "Thornton",
  "Yamamoto",
  "Kowalczyk",
  "Fitzgerald",
  "Okonkwo",
];
const locations = [
  "Riverside",
  "Oakwood",
  "Maplewood",
  "Cedarville",
  "Brookside",
  "Elmwood",
  "Fairview",
  "Hillcrest",
  "Lakeview",
  "Pinebrook",
  "Stonegate",
  "Willowdale",
];
const wholesomeAdjectives = [
  "Friendly",
  "Trusted",
  "Reliable",
  "Caring",
  "Honest",
  "Dedicated",
  "Genuine",
  "Hardworking",
  "Personal",
  "Local",
  "Family",
  "Neighborly",
];
const businessTypes = [
  "Staffing",
  "Recruiting",
  "HR Solutions",
  "Talent Group",
  "Hiring Co.",
  "Employment Services",
  "Career Services",
  "Workforce Solutions",
];

export function generate_corporate_name() {
  const style = choice(["smashed", "acronym", "latin", "founder"]);

  if (style === "smashed") {
    return `${choice(corporateFirstWords)}${choice(corporateSecondWords)}`;
  }
  if (style === "acronym") {
    return choice(corporateAcronyms);
  }
  if (style === "latin") {
    const combined =
      choice(corporateFirstWords).toLowerCase() + choice(corporateSuffixes);
    return combined.charAt(0).toUpperCase() + combined.slice(1);
  }
  if (style === "founder") {
    return `${choice(corporateLastNames)} ${choice(associateSuffixes)}`;
  }
}

export function generate_mom_and_pop_name() {
  const style = choice(["firstName", "location", "adjective", "family"]);

  if (style === "firstName") {
    return `${choice(firstNames)}'s ${choice(businessTypes)}`;
  }
  if (style === "location") {
    return `${choice(locations)} ${choice(businessTypes)}`;
  }
  if (style === "adjective") {
    return `${choice(wholesomeAdjectives)} ${choice(businessTypes)}`;
  }
  if (style === "family") {
    return `The ${choice(familyNames)} ${choice(businessTypes)}`;
  }
}

export function generate_signature(info) {
  const useEmail = Math.random() > 0.5;

  if (useEmail) {
    const address = `${choice(emailAddressList)}@${info.company.toLowerCase().replace(/[^a-z0-9]/g, "")}.${choice(emailTopLevelDomainList)}`;
    return `<p>${info.company}</br>${address}</p>`;
  } else {
    const name = choice(signatoryNames);
    const suffix =
      name === "The Team at" ? `The Team at ${info.company}` : name;
    return `<p>${suffix}<br/>${info.company}</p>`;
  }
}
