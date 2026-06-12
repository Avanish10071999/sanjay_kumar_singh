export const profile = {
  name: "Sanjay Kumar Singh",
  title: "Professor",
  department: "Department of Computer Science & Engineering",
  institution: "Indian Institute of Technology (BHU), Varanasi",
  phone: "+91 95543 21133",
  email: "sks.cse@iitbhu.ac.in",
  summary:
    "Prof. S. K. Singh is Professor in the Department of Computer Science & Engineering at IIT (BHU), Varanasi with more than 24 years of teaching experience. His work spans biometrics, computer vision, biomedical image analysis, intelligent systems, IoT, AI for healthcare, and security-focused multimedia computing.",
  focus:
    "Research directions include biometric recognition, medical image analysis, animal biometrics, explainable AI, IoT-enabled health systems, smart environments, data-centric AI, and secure multimedia analytics."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Academics", href: "/academics" },
  { label: "Scholars", href: "/scholars" },
  { label: "Talks", href: "/talks" },
  { label: "Resources", href: "/resources" },
  { label: "Collaborators", href: "/collaborators" }
];

export const stats = [
  { label: "SCI journal papers", value: "110+" },
  { label: "Edited books", value: "6" },
  { label: "Patents", value: "5" },
  { label: "Ph.D. supervised", value: "24+" }
];

export const recognitions = [
  "Visitor Nominee in Panel of Selection Committee of NITs and IIEST, President of India, 2023–2026",
  "IEEE-SPS UP Chapter Lifetime Achievement Teacher Award, IEEE UP Section, 2023",
  "Senior Member, IEEE, 2020",
  "Best Poster Award, BTAS Washington, 2010"
];

export const researchAreas = [
  {
    title: "Biometrics and Identity Systems",
    text: "Face, fingerprint, newborn, cattle, pet animal, ECG, ear, and multimodal biometric recognition with attention to robustness and security."
  },
  {
    title: "AI for Healthcare and Biomedical Data",
    text: "Histopathology, cancer image classification, CAD systems, therapeutic peptide discovery, antibiotic discovery, and clinical decision support."
  },
  {
    title: "IoT, Smart Systems, and Sensing",
    text: "Animal health ecosystems, smart buildings, energy forecasting, IoT device security, EEG classifiers, and precision livestock applications."
  },
  {
    title: "Multimedia Security and Computer Vision",
    text: "Watermarking, video authentication, tampering detection, face detection, privacy-preserving systems, and secure cloud media workflows."
  }
];

// ── SPONSORED PROJECTS ──────────────────────────────────────────
export const ongoingProjects = [
  {
    title: "Developing Novel Therapeutic Strategies for Mitigating Antimicrobial Resistance",
    agency: "NASF, GOI",
    cost: "₹153.89 Lakhs",
    duration: "3 Years",
    role: "Principal Investigator"
  },
  {
    title: "Artificial Intelligence & IoT-based Smart Vet Ecosystem for Animal Health, Patient Care & Precision Livestock Farming",
    agency: "NASF, GOI",
    cost: "₹215.38 Lakhs",
    duration: "3 Years",
    role: "Principal Investigator"
  },
  {
    title: "AI-Based Platform for Persons with Visual Impairment for Effective Social Inclusion",
    agency: "ICSSR (India) — NSTC (Taiwan)",
    cost: "₹11.825 Lakhs",
    duration: "2 Years",
    role: "Principal Investigator"
  }
];

export const completedProjects = [
  {
    title: "Intelligent System for Computer-Assisted Diagnosis (CAD) of Canine Mammary Tumours",
    agency: "DBT, Ministry of Science and Technology, GOI",
    cost: "₹60.91 Lakhs",
    duration: "3 Years",
    role: "Principal Investigator"
  },
  {
    title: "Selection of Geo Friendly Instruments and its Analysis",
    agency: "All India Council for Technical Education",
    cost: "₹9.00 Lakhs",
    duration: "2001–2003",
    role: "Principal Investigator"
  },
  {
    title: "Fusion in Fingerprint Biometrics",
    agency: "University Grant Commission",
    cost: "₹8.43 Lakhs",
    duration: "2007–2010",
    role: "Principal Investigator"
  },
  {
    title: "E-content Development for Digital Video Processing",
    agency: "Ministry of HRD, Govt. of India",
    cost: "₹9.60 Lakhs",
    duration: "2010–2011",
    role: "Principal Investigator"
  }
];

// kept for home page cards (top 3 ongoing)
export const projects = ongoingProjects.slice(0, 3).map(p => ({
  title: p.title,
  agency: p.agency.split(",")[0],
  duration: p.duration,
  role: "PI",
  cost: p.cost
}));

// ── PATENTS ──────────────────────────────────────────────────────
export const patentsList = [
  {
    title: "A Method and System for Identifying Cattle by Combining Unique Identification of Owner and Cattle",
    applicants: "Sanjay Kumar Singh et al.",
    appNo: "201711032865",
    country: "India",
    status: "Granted (2024)"
  },
  {
    title: "A System and Method for Real-Time Cattle Recognition Using Muzzle Images",
    applicants: "Sanjay Kumar Singh et al.",
    appNo: "201711008958",
    country: "India",
    status: "Application Published"
  },
  {
    title: "A Biometric Based Method and System for Identifying an Infant",
    applicants: "Sanjay Kumar Singh et al.",
    appNo: "201911008955",
    country: "India",
    status: "Application Published"
  },
  {
    title: "A Biometric Based System and Method for Management of Pet Animal",
    applicants: "Sanjay Kumar Singh et al.",
    appNo: "202011003639",
    country: "India",
    status: "Application Published"
  },
  {
    title: "IoT-based Pet Dog Health Monitoring and Kennel Cough Detection System",
    applicants: "P. Chanak, S. K. Singh, R. Sahu",
    appNo: "202021038607",
    country: "India",
    status: "Application Published"
  }
];

export const patents = patentsList.map(p => `${p.title} — ${p.status}, ${p.country}`);

// ── PROFESSIONAL ACTIVITIES ──────────────────────────────────────
export const guestEditorships = [
  {
    title: "Information Security Solutions for Telemedicine Applications",
    journal: "IEEE Access, IEEE",
    year: "2018"
  },
  {
    title: "Multimedia for Predictive Analytics",
    journal: "Multimedia Tools and Applications, Springer",
    year: "2018"
  },
  {
    title: "Advanced Techniques in Multimedia Watermarking",
    journal: "International Journal of Information and Computer Security, Inderscience",
    year: "2018"
  },
  {
    title: "Robust and Secure Data Hiding Techniques for Telemedicine Applications",
    journal: "Multimedia Tools and Applications, Springer",
    year: "2017"
  }
];

export const professionalActivities = [
  "Reviewer for various journals of IEEE, ACM, Elsevier, Springer, etc.",
  "Reviewer for various International Conferences",
  "Academic Advisor and member of Board of Studies (BoS) at various institutes and universities",
  "Delivered expert lectures at various seminars, workshops, and training programmes",
  "Provides research guidance to students for innovative projects under Design Innovation Center, IIT (BHU) Varanasi"
];

// ── PUBLICATIONS ─────────────────────────────────────────────────
export const journalPublications = [
  // 2025
  "Anantha Padmanabhan NK et al., Sanjay Kumar Singh. \"An Interpretable Electric Vehicles Battery State of Charge Estimation using MHDTCN-GRU.\" IEEE Transactions on Vehicular Technology (2024). [IF 6.1]",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"SLIDE-Net: A Sequential Modeling Approach with Adaptive Fuzzy C-Mean Empowered Data Balancing Policy for IDC Detection.\" IEEE Transactions on Fuzzy Systems (2024). [IF 11.9]",
  "Singh V., Singh S.K., & Sharma R. \"A novel framework based on explainable AI and genetic algorithms for designing neurological medicines.\" Scientific Reports 14(1):12807 (2024). [IF 3.8]",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"Data Augmentation for Medical Image Classification based on Gaussian Laplacian Pyramid Blending.\" IEEE JBHI (2024). [IF 7.7]",
  "Jayashankara M. et al., Sanjay Kumar Singh. \"A novel intelligent modeling and prediction of heat energy consumption in smart buildings.\" Energy and Buildings (2024).",
  "Shrikant Tiwari et al., Sanjay Kumar Singh. \"Biometrics recognition of newborn: a review.\" Multimedia Tools and Applications (2024).",
  "V Bharti et al., Sanjay Kumar Singh. \"A label efficient semi self-supervised learning framework for IoT devices in industrial process.\" IEEE Transactions on Industrial Informatics (2024). [IF 12.3]",
  "Sushant Kumar et al., Sanjay Kumar Singh. \"Opportunities and Challenges in Data-Centric AI.\" IEEE Access (2024).",
  // 2023
  "Jayashankara M. et al., Sanjay Kumar Singh. \"A novel approach for short-term energy forecasting in smart buildings.\" IEEE Sensors Journal 23(5):5307-5314 (2023).",
  "Ritesh Sharma et al., Sanjay Kumar Singh. \"EnDL-HemoLyt: Ensemble deep learning-based tool for identifying therapeutic peptides.\" IEEE JBHI (2023). [IF 7.7]",
  "Sandeep S Udmale et al., Sanjay Kumar Singh. \"An optimized extreme learning machine-based novel model for bearing fault classification.\" Expert Systems 41(2):e13432 (2024).",
  "Sushant Kumar et al., Sanjay Kumar Singh. \"Potential Impact of Data-Centric AI on Society.\" IEEE Technology and Society Magazine 42(3):98-107 (2023).",
  "Ritesh Sharma et al., Sanjay Kumar Singh. \"AI-based model for predicting the minimum inhibitory concentration of antibacterial peptides against ESKAPEE pathogens.\" IEEE JBHI (2023). [IF 7.7]",
  "Anviti Pandey et al., Sanjay Kumar Singh. \"An intelligent optimized deep learning model to achieve early prediction of epileptic seizures.\" Biomedical Signal Processing and Control 84 (2023).",
  "Durgesh Singh et al., Sanjay Kumar Singh. \"An efficient self-embedding fragile watermarking scheme for image authentication.\" Multimedia Tools and Applications 82(1):1045-1066 (2023).",
  "Vishakha Singh et al., Sanjay Kumar Singh. \"Designing new blood-brain barrier penetrating molecules using novel hybridized gravitational search algorithm and XAI.\" IEEE Transactions on Artificial Intelligence (2023).",
  "Vishakha Singh and Sanjay Kumar Singh. \"A separable temporal convolutional networks based deep learning technique for discovering antiviral medicines.\" Scientific Reports 13(1):13722 (2023).",
  "Durgesh Singh et al., Sanjay Kumar Singh. \"Integer wavelet transform based fragile watermarking scheme for exact authentication and restoration.\" Journal of Ambient Intelligence and Humanized Computing 14(5):4841-4852 (2023).",
  // 2022
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"MediSecFed: Private and secure medical image classification in the presence of malicious clients.\" IEEE TII 18(8):5648-5657 (2021). [IF 12.3]",
  "Vishakha Singh et al., Sanjay Kumar Singh. \"Multi-scale temporal convolutional networks for in silico discovery of alternative antibiotics.\" Expert Systems with Applications 215 (2022).",
  "Anviti Pandey et al., Sanjay Kumar Singh. \"Epileptic Seizure Classification using Battle Royale Search and Rescue optimization based Deep LSTM.\" IEEE JBHI (2022).",
  "Vishakha Singh et al., Sanjay Kumar Singh. \"Accelerating the discovery of antifungal peptides using deep temporal convolutional networks.\" Briefings in Bioinformatics (2022). [IF 9.5]",
  // 2021
  "Aneesh G Nath et al., Sanjay Kumar Singh. \"Structural rotor fault diagnosis using attention-based sensor fusion and transformers.\" IEEE Sensors Journal 22(1):707-719 (2021).",
  "Ritesh Sharma et al., Sanjay Kumar Singh. \"Deep-AVPpred: AI driven discovery of peptide drugs for viral infections.\" IEEE JBHI (2021). [IF 7.7]",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"MobiHisNet: A Lightweight CNN in Mobile Edge Computing for Histopathological Image Classification.\" IEEE IoT (2021). [IF 10.6]",
  "Vishakha Singh et al., Sanjay Kumar Singh. \"StaBle-ABPpred: accelerated discovery of antibacterial peptides.\" Briefings in Bioinformatics (2021). [IF 9.5]",
  "Ritesh Sharma et al., Sanjay Kumar Singh. \"Deep-AFPpred: Identifying novel antifungal peptides using 1DCNN-BiLSTM.\" Briefings in Bioinformatics (2021). [IF 9.5]",
  "Rishav Singh et al., Sanjay Kumar Singh. \"MetaMed: Few-shot medical image classification using gradient-based meta-learning.\" Pattern Recognition (2021). [IF 8.0]",
  "Ritesh Sharma et al., Sanjay Kumar Singh. \"AniAMPpred: AI guided discovery of novel antimicrobial peptides in animal kingdom.\" Briefings in Bioinformatics (2021). [IF 9.5]",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"CoMHisP: A Novel Feature Extractor for Histopathological Image Classification Based on Fuzzy SVM.\" IEEE TFS 29(1):103-117 (2021). [IF 11.9]",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"A Novel Cloud-Assisted Secure Deep Feature Classification Framework for Cancer Histopathology Images.\" ACM TOIT (2021). [IF 5.3]",
  "Aneesh G. Nath et al., Sanjay Kumar Singh. \"Improved Structural Rotor Fault Diagnosis using Multi-sensor Fuzzy Recurrence Plots and Classifier Fusion.\" IEEE Sensors Journal (2021).",
  "Aneesh G. Nath et al., Sanjay Kumar Singh. \"An Early Classification Approach for Improving Structural Rotor Fault Diagnosis.\" IEEE TIM (2021).",
  "Nileshkumar R. Patel et al., Sanjay Kumar Singh. \"Energy and Collision Aware WSN Routing Protocol for Sustainable and Intelligent IoT Applications.\" IEEE Sensors Journal (2021).",
  "Ritesh Sharma et al., Sanjay Kumar Singh. \"Deep-ABPpred: Identifying antibacterial peptides using bidirectional LSTM with word2vec.\" Briefings in Bioinformatics (2021). [IF 9.5]",
  // 2020
  "Rishav Singh et al., Sanjay Kumar Singh. \"SeizSClas: An Efficient and Secure IoT Based EEG Classifier.\" IEEE IoT Journal (2020). [IF 9.515]",
  "Aneesh G. Nath et al., Sanjay Kumar Singh. \"Role of artificial intelligence in rotor fault diagnosis: a comprehensive review.\" Artificial Intelligence Review (2020). [IF 8.139]",
  "Anshul Sharma and Sanjay Kumar Singh. \"A novel approach for early malware detection.\" Transactions on Emerging Telecommunications Technologies (2020).",
  "Anshul Sharma et al., Sanjay Kumar Singh. \"Early transportation mode detection using smartphone sensing data.\" IEEE Sensors Journal (2020).",
  "Anshul Sharma and Sanjay Kumar Singh. \"Early classification of multivariate data by learning optimal decision rules.\" Multimedia Tools and Applications (2020).",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"Deep Feature Learning for Histopathological Image Classification of Canine Mammary Tumors and Human Breast Cancer.\" Information Sciences, Vol. 145 (2020). [IF 6.795]",
  "Dhawal Jethwani et al., Sanjay Kumar Singh. \"Quantum-inspired classical algorithms for singular value transformation.\" arXiv:1910.05699 (2020).",
  "Rishav Singh et al., Sanjay Kumar Singh. \"Imbalanced Breast Cancer Classification Using Transfer Learning.\" IEEE/ACM TCBB (2020).",
  "Sandeep S. Udmale and Sanjay Kumar Singh. \"Multi-fault bearing classification using sensors and ConvNet-based transfer learning.\" IEEE Sensors Journal 20(3):1433-1444 (2020).",
  // 2019
  "Sandeep S. Udmale and Sanjay Kumar Singh. \"Application of Spectral Kurtosis and Improved Extreme Learning Machine for Bearing Fault Classification.\" IEEE TIM 68(11):4222-4233 (2019).",
  "Sandeep S. Udmale and Sanjay Kumar Singh. \"A mechanical data analysis using kurtogram and extreme learning machine.\" Neural Computing and Applications (2019).",
  "Sandeep S. Udmale et al., Sanjay Kumar Singh. \"A bearing data analysis based on kurtogram and deep learning sequence models.\" Measurement, Vol. 145, pp. 665-677 (2019).",
  "Sandeep S. Udmale et al., Sanjay Kumar Singh. \"A bearing vibration data analysis based on spectral kurtosis and ConvNet.\" Soft Computing 23(19):9341-9359 (2019).",
  "Santosh Kumar and Sanjay Kumar Singh. \"Cattle Recognition: A New Frontier in Visual Animal Biometrics Research.\" Proc. National Academy of Sciences India (2019).",
  "Debanjan Sadhya and Sanjay Kumar Singh. \"A comprehensive survey of unimodal facial databases in 2D and 3D domains.\" Neurocomputing, Vol. 358, pp. 188-210 (2019).",
  // 2018
  "Amit Kumar Singh et al., Sanjay Kumar Singh. \"Multiple watermarking technique for securing online social network contents.\" Future Generation Computer Systems, Vol. 86 (2018).",
  "Sadhya Debanjan and Sanjay Kumar Singh. \"Design of a cancelable biometric template protection scheme for fingerprints.\" Multimedia Tools and Applications 77(12):15113-15137 (2018).",
  "Sadhya Debanjan and Sanjay Kumar Singh. \"Construction of a Bayesian decision theory-based secure multimodal fusion framework.\" IET Biometrics 7(3):251-249 (2018).",
  "Santosh Kumar et al., Sanjay Kumar Singh. \"Privacy preserving security using biometrics in cloud computing.\" Multimedia Tools and Applications 77(9):11017-11039 (2018).",
  "Santosh Kumar et al., Sanjay Kumar Singh. \"Deep learning framework for recognition of cattle using muzzle point image pattern.\" Measurement, Vol. 116, pp. 1-17 (2018).",
  "Santosh Kumar et al., Sanjay Kumar Singh. \"An intelligent decision computing paradigm for crowd monitoring in the smart city.\" Journal of Parallel and Distributed Computing 118(2):344-358 (2018).",
  "Santosh Kumar and Sanjay Kumar Singh. \"Monitoring of pet animal in smart cities using animal biometrics.\" Future Generation Computer Systems, Vol. 83, pp. 553-563 (2018).",
  // 2017
  "Sadhya Debanjan and Sanjay Kumar Singh. \"Privacy risks ensuing from cross-matching among databases: A case study for soft biometrics.\" Information Processing Letters, Vol. 128, pp. 38-45 (2017).",
  "Santosh Kumar and Sanjay Kumar Singh. \"Automatic identification of cattle using muzzle point pattern.\" Multimedia Tools and Applications 76(24):26551-26580 (2017).",
  "Deepanwita Datta et al., Sanjay Kumar Singh. \"Bridging the gap: effect of text query reformulation in multimodal retrieval.\" Multimedia Tools and Applications 76(21):22871-22888 (2017).",
  "Santosh Kumar et al., Sanjay Kumar Singh. \"Real-time recognition of cattle using animal biometrics.\" Journal of Real-Time Image Processing 13(3):505-526 (2017).",
  "Sanjay Kumar Singh et al. \"Prediction of pain intensity using multimedia data.\" Multimedia Tools and Applications 76(18):19317-19342 (2017).",
  "Debanjan Sadhya and Sanjay Kumar Singh. \"Providing robust security measures to Bloom filter based biometric template protection schemes.\" Computers & Security, Vol. 67, pp. 59-72 (2017).",
  "Durgesh Singh and Sanjay Kumar Singh. \"DWT-SVD and DCT based robust and blind watermarking scheme for copyright protection.\" Multimedia Tools and Applications 76(11):13001-13024 (2017).",
  "Santosh Kumar and Sanjay Kumar Singh. \"Visual Animal Biometrics: Survey.\" IET Biometrics 6(3):139-156 (2017).",
  "Ramesh Chand Pandey et al., Sanjay Kumar Singh. \"A passive forensic method for video: Exposing dynamic object removal and frame duplication.\" Journal of Intelligent & Fuzzy Systems 32(5):3339-3353 (2017).",
  "Deepanwita Datta et al., Sanjay Kumar Singh. \"Multimodal retrieval using mutual information based textual query reformulation.\" Expert Systems with Applications, Vol. 68, pp. 81-92 (2017).",
  "Durgesh Singh and Sanjay Kumar Singh. \"DCT based efficient fragile watermarking scheme for image authentication and restoration.\" Multimedia Tools and Applications 76(1):953-977 (2017).",
  "Santosh Kumar et al., Sanjay Kumar Singh. \"Group sparse representation approach for recognition of cattle on muzzle point images.\" International Journal of Parallel Programming (2017).",
  // 2016
  "Santosh Kumar et al., Sanjay Kumar Singh. \"Muzzle point pattern based techniques for individual cattle identification.\" IET Image Processing (2016).",
  "Debanjan Sadhya et al., Sanjay Kumar Singh. \"Review of key-binding-based biometric data protection schemes.\" IET Biometrics 5(4):263-275 (2016).",
  "Ramesh C Pandey et al., Sanjay Kumar Singh. \"Passive forensics in image and video using noise features: A review.\" Digital Investigation, Vol. 19, pp. 1-28 (2016).",
  "Sanjay Kumar Singh et al. \"Pain Assessment Using Intelligent Computing Systems.\" Proc. National Academy of Sciences India, 86(3):285-295 (2016).",
  "Durgesh Singh and Sanjay Kumar Singh. \"Effective self-embedding watermarking scheme for image tampered detection and localization.\" Journal of Visual Communication and Image Representation, Vol. 38 (2016).",
  "Santosh Kumar et al., Sanjay Kumar Singh. \"Face Recognition of Cattle: Can it be Done?\" Proc. National Academy of Sciences India, 86(2):137-148 (2016).",
  "Debanjan Sadhya and Sanjay Kumar Singh. \"Privacy preservation for soft biometrics based multimodal recognition system.\" Computers & Security, Vol. 58, pp. 160-179 (2016).",
  // 2015 and earlier
  "Shrikant Tiwari and Sanjay Kumar Singh. \"Does All Newborn Face Lookalike to Human and Machine?\" Proc. National Academy of Sciences India, 3(4):681-683 (2015).",
  "Santosh Kumar and Sanjay Kumar Singh. \"Feature Selection and Recognition of Face by using Hybrid Chaotic PSO-BFO.\" International Journal of Natural Computing Research, 5(3):26-53 (2015).",
  "S. Srivastava et al., Sanjay Kumar Singh. \"Quantitative analysis of a CAD tool for breast cancer detection from mammograms.\" Journal of Medical Imaging and Health Informatics, 4(5):654-674 (2014).",
  "Santosh Kumar and Sanjay Kumar Singh. \"Biometric recognition for pet animal.\" Journal of Software Engineering and Applications, 7(5):470-482 (2014).",
  "Shrikant Tiwari and Sanjay Kumar Singh. \"Face Recognition for Newborns.\" IET Biometrics, 1(4):200-208 (2012).",
  "Y. N. Singh and S. K. Singh. \"Evaluation of Electrocardiogram for Biometric Authentication.\" Journal of Information Security, 3(1):39-48 (2012).",
  "M. Vatsa et al., S. K. Singh. \"Combining Pores and Ridge Features for Improved Fingerprint Verification.\" Signal Processing, 89(12):2676-2685 (2009).",
  "R. Singh et al., S. K. Singh. \"DS Theory Classifier Fusion with Update Rule to Minimize Training Time.\" IEICE Electronics Express, 3(20):429-435 (2006).",
  "S. K. Singh et al. \"A robust skin color based face detection algorithm.\" Tamkang Journal of Science & Engineering, 6(4):227-234 (2003)."
];

export const bookChapters = [
  "Anshul Sharma, Abhinav Kumar, Sanjay Kumar Singh. \"Early classification of time series data: overview, challenges, and opportunities.\" Data Fusion Techniques for Smart Healthcare (2024): 227-250.",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"Recent trends in histopathological image analysis.\" Medical Information Processing and Security (2023): 27.",
  "Sandeep S. Udmale et al., Sanjay Kumar Singh. \"Internet of things in the healthcare industry.\" IoT-Based Data Analytics for Healthcare, ch. 01, pp. 3-8, Academic Press, 2020.",
  "Abhinav Kumar et al., Sanjay Kumar Singh. \"Internet of things and other emerging technologies in digital pathology.\" IoT-Based Data Analytics for Healthcare, ch. 20, pp. 301-312, Academic Press, 2020.",
  "Vishakha Singh et al., Sanjay Kumar Singh. \"Health data analytics using Internet of things.\" IoT-Based Data Analytics for Healthcare, ch. 04, pp. 47-56, Academic Press, 2020.",
  "Vishakha Singh et al., Sanjay Kumar Singh. \"IoT for health insurance companies.\" IoT-Based Data Analytics for Healthcare, ch. 09, pp. 139-148, Academic Press, 2020.",
  "Anshul Sharma et al., Sanjay Kumar Singh. \"Time Series Data Representation and Dimensionality Reduction Techniques.\" Applications of Machine Learning, Springer, 2020. pp. 267-284.",
  "Abhinav Kumar and Sanjay Kumar Singh. \"Recent Advances in Biometric Recognition for Newborns.\" The Biometric Computing: Recognition and Registration (2019): 235.",
  "Santosh Kumar and Sanjay Kumar Singh. \"Hybrid BFO and PSO Swarm Intelligence Approach for Biometric Feature Optimization.\" Nature-Inspired Computing, IGI Global 2017.",
  "ChandPandey et al., Sanjay Kumar Singh. \"Digital Video Tampering Detection Techniques.\" Encyclopedia of Information Science and Technology, 3rd Ed., pp. 1315-1325. IGI Global, 2015.",
  "Sadhya and Sanjay Kumar Singh. \"Biometric Template Security and Biometric Encryption Using Fuzzy Frameworks.\" Encyclopedia of Information Science and Technology, 3rd Ed., pp. 512-524. IGI Global, 2015.",
  "Tiwari et al., Sanjay Kumar Singh. \"Newborn Recognition Using Multimodal Biometric.\" Encyclopedia of Information Science and Technology, 3rd Ed., pp. 4347-4357. IGI Global, 2015.",
  "Subodh Srivastava et al., Sanjay Kumar Singh. \"Image Analysis for Breast Cancer Detection from Digital Mammograms.\" Research Developments in Computer Vision, IGI Global, 2014.",
  "Mayank Vatsa, Richa Singh, Sanjay K. Singh, Saurabh Upadhyay. \"Video Authentication Using Relative Correlation Information and SVM.\" Studies in Computational Intelligence, Springer, Ch. 13, pp. 511-529, 2008.",
  "M. Vatsa et al., S. K. Singh. \"Face recognition technology: A biometric solution to security problems.\" Multimedia Systems and Content-based Image Retrieval, Idea Group Publishing."
];

export const publications = journalPublications;

export const books = [
  "S.K. Pani, Sanjay Kumar Singh, R.B. Pachori, L. Garg, X. Zhang — Intelligent Data Analytics for Terror Threat Prediction, Wiley-Scrivener, 2020",
  "Sanjay Kumar Singh, Ravi Shankar Singh, Anil Kumar Pandey, Sandeep S. Udmale, Ankit Chaudhary — IoT-Based Data Analytics for the Healthcare Industry, Academic Press, 2020",
  "Santosh Kumar, Sanjay Kumar Singh, Rishav Singh, Amit Kumar Singh — Animal Biometrics Techniques and Applications, Springer, 2018",
  "P.K. Gupta, Vipin Tyagi, Sanjay Kumar Singh — Predictive Computing and Information Security, Springer, 2017",
  "Rajeev Srivastava, Sanjay Kumar Singh, K.K. Shukla — Research Developments in Biometrics and Video Processing Techniques, IGI Global, 2013",
  "Rajeev Srivastava, Sanjay Kumar Singh, K.K. Shukla — Research Developments in Computer Vision and Image Processing: Methodologies and Applications, IGI Global, 2013"
];

// ── QUALIFICATIONS ──────────────────────────────────────────────
export const academicQualifications = [
  "Ph.D. (Computer Science and Engineering)",
  "M. Tech. (Computer Applications)",
  "B. Tech. (Computer Engineering)"
];

export const otherQualifications = [
  "Certified Novell Engineer (CNE) from Novell Netware, USA",
  "Certified Novell Administrator (CNA) from Novell Netware, USA"
];

export const memberships = [
  "Senior Member, Institute of Electrical and Electronics Engineers (IEEE)",
  "Member, Association for Computing Machinery (ACM)",
  "Life Member, Computer Society of India (CSI)",
  "Life Member, Indian Society for Technical Education (ISTE)"
];

export const subjectsTaught = [
  "Data Structures and Algorithms",
  "Computer System Organization",
  "Artificial Intelligence",
  "Selected Topics in Machine Learning"
];

// ── RESEARCH SCHOLARS ────────────────────────────────────────────
export const phdScholars = [
  { sno: 1,  name: "Dr. Saurabh Upadhyay",        area: "Forensic investigation of digital surveillance videos for tamper detection", status: "Awarded", year: 2012 },
  { sno: 2,  name: "Dr. Shrikant Tiwari",          area: "Multimodal biometric recognition for newborn", status: "Awarded", year: 2013 },
  { sno: 3,  name: "Dr. Aruni Singh",              area: "Vitality detection for face recognition", status: "Awarded", year: 2013 },
  { sno: 4,  name: "Dr. Yogendra Narain Singh",    area: "Human recognition using electrocardiogram", status: "Awarded", year: 2013 },
  { sno: 5,  name: "Dr. Subodh Srivastava",        area: "Approaches for the design and development of an automatic CAD system for early breast cancer detection from mammograms", status: "Awarded", year: 2014 },
  { sno: 6,  name: "Dr. Sanjay Kumar Singh",       area: "Multidimensional computational approaches towards pain assessment", status: "Awarded", year: 2016 },
  { sno: 7,  name: "Dr. Ali Imam Abidi",           area: "Deformable image registration methodologies for thoracic image sequences", status: "Awarded", year: 2016 },
  { sno: 8,  name: "Dr. Santosh Kumar",            area: "Cattle recognition based on face and muzzle point features", status: "Awarded", year: 2017 },
  { sno: 9,  name: "Dr. Debanjan Sadhya",          area: "Study and Design of secure and privacy preserving schemes for Biometric Templates", status: "Awarded", year: 2017 },
  { sno: 10, name: "Dr. Durgesh Singh",            area: "Effective digital image watermarking scheme for authentication, restoration and copyright protection", status: "Awarded", year: 2017 },
  { sno: 11, name: "Dr. Niraj Kumar Srivastava",   area: "Infants disease forecasting", status: "Awarded", year: 2017 },
  { sno: 12, name: "Dr. Ramesh Chand Pandey",      area: "Passive forensic techniques for image and video tampering detection", status: "Awarded", year: 2018 },
  { sno: 13, name: "Dr. Deepanwita Dutta",         area: "Enhancing the efficiency of text–image based tasks through multimodal solutions", status: "Awarded", year: 2018 },
  { sno: 14, name: "Dr. Sandeep S. Udmale",        area: "Intelligent Computing Techniques for Vibration Data Analysis", status: "Awarded", year: 2020 },
  { sno: 15, name: "Dr. Anshul Sharma",            area: "Learning Optimal Decision Criteria for Early Classification", status: "Awarded", year: 2021 },
  { sno: 16, name: "Dr. Abhinav Kumar",            area: "Artificial Intelligence Driven Techniques for Cancer Classification Using Histopathological Images", status: "Awarded", year: 2021 },
  { sno: 17, name: "Dr. Aneesh G Nath",            area: "Vibration Data Analytics Using Machine Learning", status: "Awarded", year: 2021 },
  { sno: 18, name: "Dr. Ritesh Sharma",            area: "Combating Antimicrobial Resistance with Artificial Intelligence", status: "Awarded", year: 2023 },
  { sno: 19, name: "Dr. Anviti Pandey",            area: "Intelligent Computing Techniques for Epileptic Seizure Prediction", status: "Awarded", year: 2024 },
  { sno: 20, name: "Dr. Vishakha Singh",           area: "AI-Based Novel Techniques for Accelerating Drug Discovery", status: "Awarded", year: 2024 },
  { sno: 21, name: "Dr. Jaya Shankar",             area: "Deep Learning Methods for Energy Prediction", status: "Awarded", year: 2024 },
  { sno: 22, name: "Dr. Anantha Padmanabhan",      area: "Data Analytics using ML/DL", status: "Awarded", year: 2025 },
  { sno: 23, name: "Dr. Sakshi Ranjan",            area: "Drug Discovery", status: "Awarded", year: 2026 },
  { sno: 24, name: "Dr. Niraj Kumar",              area: "Livestock Animals Identification", status: "Awarded", year: 2026 },
  { sno: 25, name: "Mr. Arpit Mishra",             area: "Image Restoration and Enhancement", status: "In Progress", year: null },
  { sno: 26, name: "Ms. Ankita Chand",             area: "Sign Language", status: "In Progress", year: null },
  { sno: 27, name: "Ms. Anshu Kumari",             area: "Pose Estimation", status: "In Progress", year: null },
  { sno: 28, name: "Mr. Hrishikesh Singh",         area: "Agentic AI in Soil Erosion", status: "In Progress", year: null },
  { sno: 29, name: "Ms. Sweta Jha",               area: "Medical Image Analysis", status: "In Progress", year: null },
  { sno: 30, name: "Mr. Avanish Pratap Singh",     area: "Course Work", status: "In Progress", year: null },
  { sno: 31, name: "Mr. Satyendra Yadav",          area: "Course Work", status: "In Progress", year: null }
];

export const pastScholars = phdScholars
  .filter(s => s.status === "Awarded")
  .map(s => ({
    name: s.name,
    interest: s.area,
    position: s.name === "Dr. Abhinav Kumar"
      ? "Assistant Professor, School of AI and Data Engineering, IIT Ropar"
      : undefined,
    email: s.name === "Dr. Abhinav Kumar" ? "abhinavk@iitrpr.ac.in" : undefined,
    phone: s.name === "Dr. Abhinav Kumar" ? "+91-7543008607" : undefined
  }));

export const currentScholars = phdScholars
  .filter(s => s.status === "In Progress")
  .map(s => ({
    name: s.name,
    interest: s.area,
    email: s.name === "Ms. Ankita Chand" ? "ankitachand.rs.cse24@itbhu.ac.in"
      : s.name === "Ms. Anshu Kumari" ? "anshukumari.rs.cse24@itbhu.ac.in"
      : s.name === "Ms. Sweta Jha" ? "swetajha.rs.cse25@itbhu.ac.in"
      : undefined
  }));

// ── ACADEMICS ────────────────────────────────────────────────────
export const experience = [
  "Professor, Department of CSE, IIT (BHU) Varanasi — 2017 to present",
  "Professor & Head, Department of CSE, IIT (BHU) Varanasi — 2021–2024",
  "Associate Professor, Department of CSE, IIT (BHU) Varanasi — 2007–2017",
  "Head, Department of Computer Science and Engineering, VBSPU — 1997–2007",
  "Network and Hardware Engineer, COMNET Technologies, New Delhi — March 1995 – November 1997"
];

export const administration = [
  "Head, Department of Computer Science and Engineering, IIT BHU — 2021–2024",
  "Coordinator, Supercomputing Center, IIT BHU — 2021 to present",
  "Chairman, JEE (Advanced) 2021",
  "Member, Senate — 2017 to present",
  "Member, Departmental Undergraduate Committee (DUGC) — AY 2017–2019",
  "Member, Departmental Purchase Committee — 2017 to present",
  "Member, Women Grievance Cell Committee — 2017–2019",
  "Member, Standing Student Disciplinary Committee (SSDC) — AY 2017–18",
  "Member, Department Post Graduate Committee (DPGC) — 2016 to present",
  "Member, Cafeteria Management Committee — 2015–2019",
  "Member, Department Faculty Affairs Committee (DFAC) — 2015 to present",
  "Member, Purchase Committee Teaching-Learning Cell — AY 2015–16",
  "Member, Senate Post Graduate Committee (SPGC) — AY 2014–16",
  "Convener, Department Post Graduate Committee (DPGC) — AY 2014–16",
  "Member, Purchase Committee Design Innovation Centre — 2014 to present",
  "Member, Design Innovation Centre — 2014 to present",
  "Member, Central Purchase Committee — AY 2011–12",
  "In-charge, Departmental Examination — AY 2008–2012",
  "In-charge, Visual Computing and Data Analytics Laboratory — 2007 to present",
  "Examination In-charge, VBSPU — 2004–2006",
  "Hostel Warden (Admin), VBSPU — 1998–2000",
  "Head, Department of Computer Science and Engineering, VBSPU — 1997–2007"
];

export const administrationOutside = [
  "Member, Selection Committee at various Institutes and Universities",
  "Member, Academic Advisor and Board of Studies (BoS) at various Institutes and Universities",
  "Member, Research Proposal Evaluation Committee at National and International Level",
  "Technical Expert, Public Service Commission at State Level",
  "Member, Scrutiny Committee AICTE, New Delhi",
  "Member, AICTE Quality Improvement Schemes (AQIS), AICTE, New Delhi",
  "Session Chair for various International Conferences",
  "Member, Technical Advisory Committee for various International Conferences / Workshops / Seminars",
  "Member, Application Screening Committee at various Institutes and Universities",
  "Member, Career Advancement Scheme (CAS) Promotion Committee at various Institutes and Universities",
  "Organizing Secretary, International Conference on AI and Soft Computing (AISC), 2012",
  "Member, Expert Technical Specification Evaluation Committee, CSIR — 2010–11"
];

export const societies = [
  "Senior Member, Institute of Electrical and Electronics Engineers (IEEE)",
  "Member, Association for Computing Machinery (ACM)",
  "Life Member, Computer Society of India (CSI)",
  "Life Member, Indian Society for Technical Education (ISTE)"
];

// ── TALKS / CONFERENCES ──────────────────────────────────────────
export const conferenceItems = [
  "Anshul Sharma et al. \"Adaptive Early Classification of Time Series Using Deep Learning.\" ICONIP, Springer, pp. 533-542 (2022).",
  "Sandeep S. Udmale et al. \"Application of Industry 4.0 and Meta Learning for Bearing Fault Classification.\" IEEE CSCWD, pp. 1455-1460 (2022).",
  "Sandeep S. Udmale and Sanjay Kumar Singh. \"Bearing Fault Classification using Wavelet Energy and Autoencoder.\" ICDCIT, pp. 227-238 (2020).",
  "Anshul Sharma and Sanjay Kumar Singh. \"Early classification of time series based on uncertainty measure.\" IEEE ICT, pp. 1-6 (2019).",
  "Parth Pahariya and Sanjay Kumar Singh. \"Fingerprint Authentication Using LT Codes.\" ACM ICBEA, pp. 38-42 (2018).",
  "Debanjan Sadhya et al. \"Capturing the Effects of Attribute Based Correlation on Privacy in Micro-databases.\" IEEE SECRYPT (2017).",
  "Deepanwita Datta et al. \"Seeing the bigger picture: A novel statistical approach for enhancing image annotation.\" IEEE SMC, pp. 1173-1178 (2017).",
  "Debanjan Sadhya et al. \"BioSoft — a multimodal biometric database incorporating soft traits.\" IEEE ISBA, pp. 1-6 (2017).",
  "Vishwajeet Pattanaik et al. \"Smart real-time traffic congestion estimation and clustering technique for urban vehicular roads.\" IEEE TENCON, pp. 3420-3423 (2016).",
  "Santosh Kumar et al. \"A Fast Cattle Recognition System using Smart devices.\" ACM Multimedia, pp. 742-743 (2016).",
  "Santosh Kumar et al. \"Poster: a real-time cattle recognition system using wireless multimedia networks.\" ACM MobiSys Companion, p. 48 (2016).",
  "Ramesh Chand Pandey et al. \"Passive Copy Move Forgery Detection Using SURF, HOG and SIFT Features.\" FICTA, Springer, pp. 659-666 (2015).",
  "Ramesh Chand Pandey et al. \"Fast and robust passive copy-move forgery detection using SURF and SIFT image features.\" IEEE ICIIS, pp. 1-6 (2014).",
  "S. Bharadwaj et al., S. K. Singh. \"Face Recognition for Newborns: A Preliminary Study.\" IEEE BTAS (2010). [Best Poster Award]",
  "M. Vatsa et al., S. K. Singh. \"Quality Induced Fingerprint Identification using Extended Feature Set.\" IEEE BTAS (2008).",
  "R. Singh et al., S. K. Singh. \"Age Transformation for Improving Face Recognition Performance.\" PReMI LNCS Vol. 4815, pp. 576-583 (2007).",
  "R. Singh et al., S. K. Singh. \"Dempster Shafer Theory based Classifier Fusion for Improved Fingerprint Verification.\" ICVGIP LNCS Vol. 4338, pp. 941-949 (2006).",
  "S. K. Singh et al. \"A comparative study of various face recognition algorithms.\" IEEE CAMP (2003).",
  "M. Vatsa et al., S. K. Singh. \"Comparison of face recognition technology: neural network & line based approach.\" IEEE SMC, Vol. 6 (2002)."
];

export const collaborators = [
  "Amit Kumar Singh",
  "Sonal Saxena",
  "Ritesh Sharma",
  "Abhinav Kumar",
  "Sandeep S. Udmale",
  "Vishakha Singh",
  "Prasenjit Chanak",
  "Rajeev Kumar Singh",
  "Santosh Kumar",
  "Rishav Singh",
  "Anshul Sharma",
  "Shrikant Tiwari",
  "Debanjan Sadhya",
  "Durgesh Singh",
  "Aneesh G. Nath",
  "Mayank Vatsa",
  "Richa Singh",
  "Yogendra Narain Singh",
  "Ramesh Chand Pandey",
  "Deepanwita Datta",
  "Sameer Shrivastava",
  "Anviti Pandey",
  "Anantha Padmanabhan NK",
  "Sushant Kumar"
];
