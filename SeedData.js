// Niyaman prototype — seed / reference data. Plain ES module, no build step.

export const CATEGORIES = [
  { code: 'PUBLIC', label: 'Public' },
  { code: 'PRIVATE', label: 'Private' },
  { code: 'FOREIGN', label: 'Foreign' },
  { code: 'NONPROFIT', label: 'Profit Non-Distributing' },
];

export const TYPES = [
  { code: 'PRIVATE_SOLE', category: 'PRIVATE', label: 'Private › Sole Ownership' },
  { code: 'PRIVATE_JV', category: 'PRIVATE', label: 'Private › Multiple Proprietor › Joint Venture (Nepali & Foreign Investor)' },
  { code: 'PRIVATE_ALL_FOREIGN', category: 'PRIVATE', label: 'Private › Multiple Proprietor › All Foreign Ownership' },
  { code: 'PRIVATE_ALL_NEPALI', category: 'PRIVATE', label: 'Private › Multiple Proprietor › All Nepali Ownership' },
  { code: 'PRIVATE_SOLE_FOREIGN', category: 'PRIVATE', label: 'Private › Sole Proprietor, All Foreign Ownership' },
];

export const OBLIGATION_TYPES = [
  { id: 'AGM', label: 'Annual General Meeting', ruleText: 'Must be held before the end of the Nepali month of Poush each fiscal year.', legalRef: 'Companies Act §§ 51, 76, 78, 92, 107, 111' },
  { id: 'AGM_FILING', label: 'AGM Document Filing with OCR', ruleText: 'Notice, minutes, board report, auditor\'s report and financials must be filed with OCR within 1 month of the AGM date.', legalRef: 'Companies Act § 78' },
  { id: 'AUDIT', label: 'Annual Audit', ruleText: 'Audited financial statements are required annually alongside AGM filings.', legalRef: 'Companies Act (general provisions)' },
];

export const NISC_CODES = [
  { code: '24', nameEnglish: 'Manufacture of basic metal', nameNepali: 'आधारभूत धातुहरूको उत्पादन गर्ने' },
  { code: '1393', nameEnglish: 'Manufacture of carpets and rugs', nameNepali: 'दरी (कार्पेट) तथा रग (राडीपाखी) उत्पादन' },
  { code: '1394', nameEnglish: 'Manufacture of cordage, rope, twine and netting', nameNepali: 'डोरी, सुर्ता र जाली उत्पादन' },
  { code: '6201', nameEnglish: 'Computer programming activities', nameNepali: 'कम्प्युटर प्रोग्रामिङ सेवा' },
  { code: '4791', nameEnglish: 'Retail sale via mail order houses or via internet', nameNepali: 'इन्टरनेटमार्फत खुद्रा बिक्री' },
  { code: '5610', nameEnglish: 'Restaurants and mobile food service activities', nameNepali: 'रेस्टुरेन्ट तथा खाद्य सेवा' },
  { code: '8542', nameEnglish: 'Post-secondary non-tertiary education', nameNepali: 'उच्च माध्यमिक तह शिक्षा' },
  { code: '1010', nameEnglish: 'Processing and preserving of meat', nameNepali: 'मासु प्रशोधन तथा संरक्षण' },
  { code: '1071', nameEnglish: 'Manufacture of bakery products', nameNepali: 'बेकरी उत्पादन' },
  { code: '1101', nameEnglish: 'Distilling, rectifying and blending of spirits', nameNepali: 'मदिरा उत्पादन' },
  { code: '1410', nameEnglish: 'Manufacture of wearing apparel', nameNepali: 'पोशाक उत्पादन' },
  { code: '1512', nameEnglish: 'Manufacture of luggage, handbags and footwear', nameNepali: 'झोला तथा जुत्ता उत्पादन' },
  { code: '1622', nameEnglish: 'Manufacture of builders\' carpentry and joinery', nameNepali: 'काठको फर्निचर तथा जोइनरी उत्पादन' },
  { code: '2013', nameEnglish: 'Manufacture of plastics products', nameNepali: 'प्लास्टिक वस्तु उत्पादन' },
  { code: '2394', nameEnglish: 'Manufacture of cement, lime and plaster', nameNepali: 'सिमेन्ट, चुन उत्पादन' },
  { code: '2homers', nameEnglish: '__skip__', nameNepali: '' },
  { code: '2599', nameEnglish: 'Manufacture of other fabricated metal products', nameNepali: 'धातुका अन्य वस्तु उत्पादन' },
  { code: '3100', nameEnglish: 'Manufacture of furniture', nameNepali: 'फर्निचर उत्पादन' },
  { code: '4100', nameEnglish: 'Construction of buildings', nameNepali: 'भवन निर्माण' },
  { code: '4210', nameEnglish: 'Construction of roads and railways', nameNepali: 'सडक तथा रेलमार्ग निर्माण' },
  { code: '4220', nameEnglish: 'Construction of utility projects', nameNepali: 'उपयोगिता आयोजना निर्माण' },
  { code: '4520', nameEnglish: 'Maintenance and repair of motor vehicles', nameNepali: 'सवारी साधन मर्मत सेवा' },
  { code: '4630', nameEnglish: 'Wholesale of food, beverages and tobacco', nameNepali: 'खाद्य तथा पेय पदार्थको थोक बिक्री' },
  { code: '4649', nameEnglish: 'Wholesale of other household goods', nameNepali: 'घरायसी सामानको थोक बिक्री' },
  { code: '4661', nameEnglish: 'Wholesale of agricultural machinery', nameNepali: 'कृषि यन्त्रको थोक बिक्री' },
  { code: '4711', nameEnglish: 'Retail sale in non-specialized stores (groceries)', nameNepali: 'किराना पसल खुद्रा बिक्री' },
  { code: '4721', nameEnglish: 'Retail sale of food in specialized stores', nameNepali: 'खाद्य वस्तुको विशेष खुद्रा पसल' },
  { code: '4772', nameEnglish: 'Retail sale of pharmaceutical and medical goods', nameNepali: 'औषधि पसल खुद्रा बिक्री' },
  { code: '4923', nameEnglish: 'Freight transport by road', nameNepali: 'सडकमार्ग मालवाहक ढुवानी' },
  { code: '4922', nameEnglish: 'Other passenger land transport', nameNepali: 'यात्रु ढुवानी सेवा' },
  { code: '5510', nameEnglish: 'Hotels and similar accommodation', nameNepali: 'होटल तथा आवास सेवा' },
  { code: '5520', nameEnglish: 'Camping grounds and trekking lodges', nameNepali: 'ट्रेकिङ लज तथा क्याम्पिङ सेवा' },
  { code: '5813', nameEnglish: 'Publishing of newspapers and journals', nameNepali: 'पत्रपत्रिका प्रकाशन' },
  { code: '5820', nameEnglish: 'Software publishing', nameNepali: 'सफ्टवेयर प्रकाशन' },
  { code: '6110', nameEnglish: 'Wired telecommunications activities', nameNepali: 'तार सञ्चार सेवा' },
  { code: '6202', nameEnglish: 'Computer consultancy activities', nameNepali: 'कम्प्युटर परामर्श सेवा' },
  { code: '6311', nameEnglish: 'Data processing and hosting', nameNepali: 'डाटा प्रशोधन तथा होस्टिङ' },
  { code: '6419', nameEnglish: 'Other monetary intermediation (banking-adjacent)', nameNepali: 'बैंकिङ सम्बन्धी सेवा' },
  { code: '6492', nameEnglish: 'Other credit granting', nameNepali: 'ऋण प्रवाह सेवा' },
  { code: '6499', nameEnglish: 'Other financial service activities', nameNepali: 'अन्य वित्तीय सेवा' },
  { code: '6621', nameEnglish: 'Risk and damage evaluation (insurance survey)', nameNepali: 'बीमा मूल्याङ्कन सेवा' },
  { code: '6810', nameEnglish: 'Real estate activities with own or leased property', nameNepali: 'घरजग्गा सेवा' },
  { code: '6910', nameEnglish: 'Legal activities', nameNepali: 'कानुनी सेवा' },
  { code: '6920', nameEnglish: 'Accounting, bookkeeping and auditing activities', nameNepali: 'लेखा तथा लेखापरीक्षण सेवा' },
  { code: '7020', nameEnglish: 'Management consultancy activities', nameNepali: 'व्यवस्थापन परामर्श सेवा' },
  { code: '7110', nameEnglish: 'Architectural and engineering activities', nameNepali: 'वास्तुकला तथा इन्जिनियरिङ सेवा' },
  { code: '7210', nameEnglish: 'Research on natural sciences and engineering', nameNepali: 'वैज्ञानिक अनुसन्धान सेवा' },
  { code: '7310', nameEnglish: 'Advertising', nameNepali: 'विज्ञापन सेवा' },
  { code: '7911', nameEnglish: 'Travel agency activities', nameNepali: 'ट्राभल एजेन्सी सेवा' },
  { code: '8110', nameEnglish: 'Combined facilities support activities', nameNepali: 'भवन सहयोगी सेवा' },
  { code: '8551', nameEnglish: 'Sports and recreation education', nameNepali: 'खेलकुद शिक्षा' },
  { code: '8610', nameEnglish: 'Hospital activities', nameNepali: 'अस्पताल सेवा' },
  { code: '8620', nameEnglish: 'Medical and dental practice activities', nameNepali: 'चिकित्सा तथा दन्त सेवा' },
  { code: '8710', nameEnglish: 'Residential nursing care facilities', nameNepali: 'नर्सिङ हेरचाह सेवा' },
  { code: '0111', nameEnglish: 'Growing of cereals and other crops', nameNepali: 'अन्न तथा बाली उत्पादन' },
  { code: '0121', nameEnglish: 'Growing of grapes / orchard fruits', nameNepali: 'फलफूल खेती' },
  { code: '0141', nameEnglish: 'Raising of dairy cattle', nameNepali: 'दुग्ध गाईवस्तु पालन' },
  { code: '0146', nameEnglish: 'Raising of poultry', nameNepali: 'कुखुरा पालन' },
  { code: '0322', nameEnglish: 'Freshwater aquaculture', nameNepali: 'ताजा पानी माछापालन' },
];
// remove placeholder row
NISC_CODES.splice(NISC_CODES.findIndex(n => n.code === '2homers'), 1);

export const WORKSPACES = [
  { id: 'ws-firm', name: 'Himalayan Legal Associates', type: 'firm', tagline: 'Corporate secretarial firm' },
  { id: 'ws-owner1', name: 'Prakash Shrestha (Owner)', type: 'owner', tagline: 'Business owner workspace' },
];

function buildCompanies() {
  return [
    {
      id: 'co-himal', workspaceId: 'ws-firm',
      nameEnglish: 'Himal Herbal Products Pvt. Ltd.', nameNepali: 'हिमाल हर्बल प्रोडक्ट्स प्रा.लि.',
      category: 'PRIVATE', type: 'PRIVATE_ALL_NEPALI',
      registrationNumber: '198472/077/078', registeredWithOcr: true,
      registeredAddress: 'Ward No. 4, Kalanki, Kathmandu, Bagmati Province',
      fiscalYearEndConvention: 'Ashadh end (mid-July)', incorporationDate: '2019-11-12',
      objectives: [
        { niscCode: '1393', nameEnglish: 'Manufacture of carpets and rugs', nameNepali: 'दरी (कार्पेट) उत्पादन', customDescription: 'Handmade wool carpet manufacturing for export' },
        { niscCode: '4649', nameEnglish: 'Wholesale of other household goods', nameNepali: 'घरायसी सामानको थोक बिक्री', customDescription: '' },
      ],
      authorizedCapital: 20000000, issuedCapital: 12000000, paidUpCapital: 12000000, parValue: 100,
      shareholders: [
        { id: 'sh1', name: 'Bimala Gurung', citizenshipRef: 'Citizenship No. 27-01-71-04521', shares: 7200, shareClass: 'Ordinary', contact: '98510xxxxx' },
        { id: 'sh2', name: 'Rajendra Thapa', citizenshipRef: 'Citizenship No. 31-01-69-11023', shares: 4800, shareClass: 'Ordinary', contact: '98410xxxxx' },
      ],
      directors: [
        { id: 'd1', name: 'Bimala Gurung', role: 'Chairperson', appointmentDate: '2019-11-12', contact: '98510xxxxx' },
        { id: 'd2', name: 'Rajendra Thapa', role: 'Director', appointmentDate: '2019-11-12', contact: '98410xxxxx' },
      ],
      complianceItems: [
        { id: 'ci1', obligationTypeId: 'AGM', label: 'AGM — FY 2082/83', dueDate: '2026-09-20', completed: false },
        { id: 'ci2', obligationTypeId: 'AUDIT', label: 'Annual Audit — FY 2081/82', dueDate: '2026-08-25', completed: false },
      ],
      agmCycles: [
        {
          id: 'agm-himal-1', fiscalYear: '2082/83', meetingDate: '', status: 'Draft',
          agendaItems: ['Approve annual accounts for FY 2082/83', 'Appoint statutory auditor', 'Discuss dividend declaration'],
          decisions: { dividendDeclared: false, dividendPercent: '', auditorAppointment: '', directorChanges: '', remuneration: '' },
          discussionNotes: '', financials: { revenue: '', netProfit: '', totalAssets: '', notes: '' },
          documents: [],
        },
      ],
    },
    {
      id: 'co-sagarmatha', workspaceId: 'ws-firm',
      nameEnglish: 'Sagarmatha Software Solutions Pvt. Ltd.', nameNepali: 'सगरमाथा सफ्टवेयर सोलुसन्स प्रा.लि.',
      category: 'PRIVATE', type: 'PRIVATE_JV',
      registrationNumber: '204519/078/079', registeredWithOcr: true,
      registeredAddress: 'Ward No. 10, Jhamsikhel, Lalitpur, Bagmati Province',
      fiscalYearEndConvention: 'Ashadh end (mid-July)', incorporationDate: '2021-02-03',
      objectives: [
        { niscCode: '6201', nameEnglish: 'Computer programming activities', nameNepali: 'कम्प्युटर प्रोग्रामिङ सेवा', customDescription: 'Custom software & SaaS development' },
        { niscCode: '6202', nameEnglish: 'Computer consultancy activities', nameNepali: 'कम्प्युटर परामर्श सेवा', customDescription: '' },
      ],
      authorizedCapital: 50000000, issuedCapital: 30000000, paidUpCapital: 30000000, parValue: 100,
      shareholders: [
        { id: 'sh3', name: 'Anish Maharjan', citizenshipRef: 'Citizenship No. 27-01-75-08822', shares: 18000, shareClass: 'Ordinary', contact: '98010xxxxx' },
        { id: 'sh4', name: 'Kevin Alders (Foreign Investor)', citizenshipRef: 'Passport No. US-44219981', shares: 12000, shareClass: 'Ordinary', contact: 'kevin@example.com' },
      ],
      directors: [
        { id: 'd3', name: 'Anish Maharjan', role: 'Managing Director', appointmentDate: '2021-02-03', contact: '98010xxxxx' },
        { id: 'd4', name: 'Sunita Karki', role: 'Director', appointmentDate: '2021-02-03', contact: '98110xxxxx' },
      ],
      complianceItems: [
        { id: 'ci3', obligationTypeId: 'AGM_FILING', label: 'OCR Filing — FY 2081/82 AGM', dueDate: '2026-08-01', completed: false },
        { id: 'ci4', obligationTypeId: 'AGM', label: 'AGM — FY 2082/83', dueDate: '2026-09-20', completed: false },
        { id: 'ci5', obligationTypeId: 'AUDIT', label: 'Annual Audit — FY 2081/82', dueDate: '2026-09-05', completed: false },
      ],
      agmCycles: [
        {
          id: 'agm-sagarmatha-1', fiscalYear: '2081/82', meetingDate: '2026-07-10', status: 'Held',
          agendaItems: ['Approve FY 2081/82 accounts', 'Reappoint M/S Karki & Associates as statutory auditor', 'Approve non-executive director remuneration'],
          decisions: { dividendDeclared: true, dividendPercent: '8', auditorAppointment: 'M/S Karki & Associates (reappointed)', directorChanges: 'None', remuneration: 'NPR 25,000 per meeting for non-executive directors' },
          discussionNotes: 'Board reviewed FY2081/82 performance; revenue grew about 22% year on year driven by new SaaS contracts. Shareholders discussed reinvestment versus dividend and agreed on an 8% dividend. Auditor M/S Karki & Associates was reappointed for FY2082/83. No changes proposed to board composition. Remuneration for non-executive directors set at NPR 25,000 per meeting attended.',
          financials: { revenue: '45,000,000', netProfit: '6,200,000', totalAssets: '38,500,000', notes: 'Growth driven by three new enterprise SaaS contracts signed in Q3.' },
          documents: [
            {
              id: 'doc-min-1', type: 'Minutes', status: 'Final', lastExportedAt: null,
              content: '<p><strong>MINUTES OF THE ANNUAL GENERAL MEETING</strong><br/>of Sagarmatha Software Solutions Pvt. Ltd. held on 10 July 2026 (26 Ashadh 2083) at the registered office, Jhamsikhel, Lalitpur.</p><p>Present: Mr. Anish Maharjan (Managing Director, in the Chair), Ms. Sunita Karki (Director), and shareholders holding a quorum of paid-up capital, as recorded in the attendance register.</p><p>The Chairperson called the meeting to order and confirmed that notice had been duly given in accordance with Section 76 of the Companies Act, 2063 and that a quorum was present.</p><p><strong>1. Approval of Annual Accounts.</strong> IT WAS RESOLVED THAT the audited financial statements of the Company for fiscal year 2081/82 be and are hereby approved.</p><p><strong>2. Dividend.</strong> IT WAS RESOLVED THAT a dividend of 8% on paid-up capital be declared for fiscal year 2081/82.</p><p><strong>3. Auditor.</strong> IT WAS RESOLVED THAT M/S Karki & Associates be and are hereby reappointed as statutory auditor of the Company for fiscal year 2082/83.</p><p><strong>4. Director Remuneration.</strong> IT WAS RESOLVED THAT non-executive directors be paid NPR 25,000 per meeting attended.</p><p>There being no further business, the meeting concluded with a vote of thanks to the Chair.</p><p>______________________<br/>Chairperson</p>',
              versions: [],
            },
          ],
        },
      ],
    },
    {
      id: 'co-annapurna', workspaceId: 'ws-owner1',
      nameEnglish: 'Annapurna Agro Traders Pvt. Ltd.', nameNepali: 'अन्नपूर्ण एग्रो ट्रेडर्स प्रा.लि.',
      category: 'PRIVATE', type: 'PRIVATE_SOLE',
      registrationNumber: '', registeredWithOcr: false,
      registeredAddress: 'Ward No. 6, Pokhara Metropolitan City, Gandaki Province',
      fiscalYearEndConvention: 'Ashadh end (mid-July)', incorporationDate: '2024-05-20',
      objectives: [
        { niscCode: '4649', nameEnglish: 'Wholesale of other household goods', nameNepali: 'घरायसी सामानको थोक बिक्री', customDescription: 'Agro-input trading' },
      ],
      authorizedCapital: 5000000, issuedCapital: 2000000, paidUpCapital: 2000000, parValue: 100,
      shareholders: [
        { id: 'sh5', name: 'Prakash Shrestha', citizenshipRef: 'Citizenship No. 40-01-70-03312', shares: 20000, shareClass: 'Ordinary', contact: '98610xxxxx' },
      ],
      directors: [
        { id: 'd5', name: 'Prakash Shrestha', role: 'Director', appointmentDate: '2024-05-20', contact: '98610xxxxx' },
      ],
      complianceItems: [
        { id: 'ci6', obligationTypeId: 'AGM', label: 'AGM — FY 2082/83', dueDate: '2026-09-20', completed: false },
      ],
      agmCycles: [],
    },
  ];
}

export const NOTIFICATIONS = [
  { id: 'n1', companyId: 'co-sagarmatha', message: 'OCR filing overdue for Sagarmatha Software Solutions — AGM documents for FY 2081/82 were due 1 Aug 2026.', dueDate: '2026-08-01', createdAt: '2026-08-02T09:00:00', read: false },
  { id: 'n2', companyId: 'co-himal', message: 'AGM for Himal Herbal Products (FY 2082/83) must be completed before end of Poush — due 20 Sep 2026.', dueDate: '2026-09-20', createdAt: '2026-07-20T09:00:00', read: true },
];

export function buildSeed() {
  return {
    workspaces: WORKSPACES,
    companies: buildCompanies(),
    obligationTypes: OBLIGATION_TYPES,
    notifications: NOTIFICATIONS,
    categories: CATEGORIES,
    types: TYPES,
    niscCodes: NISC_CODES,
  };
}
