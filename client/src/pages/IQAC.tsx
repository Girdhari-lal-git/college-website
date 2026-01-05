import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from "@/components/LazyImage";
import { ChevronDown, ChevronRight, Download, Eye, Users, Target, Award, BookOpen, FileText, Calendar, CheckCircle } from 'lucide-react';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';



const iqacConstitution = [
    'Constitution 2025-26',
    'Constitution 2024-25 (After Visit)',
    'Constitution 2024-25',
    'Constitution 2023-24',
    'Constitution 2022-23',
    'Constitution 2021-22',
    'Constitution 2020-21',
    'Constitution 2019-20',
    'Constitution 2018-19'
];

const iqacInitiatives = [
    'IQAC Initiatives (After 2018)',
    'IQAC Initiatives (Before 2018)',
    'IQAC Initiatives (from 2023-24)',
];

const aqarReports = [
    'AQAR (2022-23)',
    'AQAR (2021-22)',
    'AQAR (2020-21)',
    'AQAR (2019-20)',
    'AQAR (2018-19)'
];

const strategicPlans = [
    'Strategic Development Plan 2023 Onwards',
    'Measured Analysis of Strategic Development Plan 2018-22 by IQAC',
    'Strategic Development Plan 2018-22'
];

const feedbackForms = [
    'Alumni Survey Questionnaire',
    'Employer\'s Feedback Form',
    'Faculty Feedback form',
    'Student Feedback form on Ambience',
    'Student Feedback form on Academics',
    'Student Feedback on Academics over ERP (Process)'
];

const feedbackAnalysis = [
    'Action Taken Report of Feedback (2024-25)',
    'Feedback Analysis (2024-25)',
    'Action Taken Report of Feedback (2023-24)',
    'Feedback Analysis (2023-24)',
    'Action Taken Report of Feedback (2022-23)',
    'Feedback Analysis (2022-23)',
    'Action Taken Report of Feedback (2021-22)',
    'Feedback Analysis (2021-22)',
    'Action Taken Report of Feedback (2020-21)',
    'Feedback Analysis (2020-21)',
    'Action Taken Report of Feedback (2019-20)',
    'Feedback Analysis (2019-20)',
    'Action Taken Report of Feedback (2018-19)',
    'Feedback Analysis (2018-19)'
];

const studentSurveys = [
    'Students Satisfaction Survey 2024-25',
    'Students Satisfaction Survey 2023-24',
    'Students Satisfaction Survey 2022-23',
    'Students Satisfaction Survey 2021-22',
    'Students Satisfaction Survey 2020-21',
    'Students Satisfaction Survey 2019-20',
    'Students Satisfaction Survey 2018-19'
];

const academicAudits = [
    'Academic & Administrative Audit 2023-24',
    'Academic & Administrative Audit 2022-23',
    'Academic & Administrative Audit 2021-22',
    'Academic & Administrative Audit 2020-21',
    'Academic & Administrative Audit 2019-20',
    'Academic & Administrative Audit 2018-19'
];

const bestPractices = [
    'Best Practices 1',
    'Best Practices 2'
];

const bestPracticesEvidence = [
    'Best Practices 1 Evidence',
    'Best Practices 2 Evidence'
];

// Enhanced data for IQAC Meetings & Action Taken Reports with triple nested structure
export const iqacMeetingsData: Record<string, Record<string, { label: string; link: string }[]>> = {
  
  "2025-26": {
    "Meeting 32": [
      { label: "Agenda of Meeting - 32", link: "#" },
      { label: "Minutes of Meeting - 32", link: "#" },
      { label: "Action Taken Report - 31", link: "#" },
    ],
    "Meeting 31": [
      { label: "Agenda of Meeting - 31", link: "#" },
      { label: "Minutes of Meeting - 31", link: "#" },
      { label: "Action Taken Report - 30", link: "#" },
    ],
    "Meeting 30": [
      { label: "Agenda of Meeting - 30", link: "#" },
      { label: "Minutes of Meeting - 30", link: "#" },
      { label: "Action Taken Report - 29", link: "#" },
    ],
     "Meeting 29": [
      { label: "Agenda of Meeting - 29", link: "https://drive.google.com/file/d/14XMZYFtajWiI78MQHtmPZNUwRoGDz-wQ/view?usp=drive_link" },
      { label: "Minutes of Meeting - 29", link: "https://drive.google.com/file/d/1DUjWeIbVZeMQBoxQNq8oC6VBz-RZVMLf/view?usp=drive_link" },
      { label: "Action Taken Report - 28", link: "https://drive.google.com/file/d/1HeMCD1eqW3lpHIz464vCfo0ZLVlj4oOS/view?usp=drive_link" },
    ],
  },
  "2024-25": {
    "Meeting 28": [
      { label: "Agenda of Meeting - 28", link: "https://drive.google.com/file/d/1wnhQaCg-6hw2K_bDwYMneT28bOM0SSst/view?usp=drive_link" },
      { label: "Minutes of Meeting - 28", link: "https://drive.google.com/file/d/1BmedXO8_X4Ug9Aba9O25LiVZYgg3C2jb/view?usp=drive_link" },
      { label: "Action Taken Report - 27", link: "https://drive.google.com/file/d/1nOmmsKIcabmoM_oVomM6Zua7hUaB-QLi/view?usp=drive_link" },
    ],
    "Meeting 27": [
      { label: "Agenda of Meeting - 27", link: "https://drive.google.com/file/d/1OJe6r5OQm2VHqVGULByu56kkKDXMv7-B/view?usp=drive_link" },
      { label: "Minutes of Meeting - 27", link: "https://drive.google.com/file/d/1r-1mmx-NysLLUNCBD1MJ5A2kjqauqrsU/view?usp=drive_link" },
      { label: "Action Taken Report - 26", link: "https://drive.google.com/file/d/1mUBAFD4Z8d_Pz_5VGThNei6_EH7TgS3l/view?usp=drive_link" },
    ],
    "Meeting 26": [
      { label: "Agenda of Meeting - 26", link: "https://drive.google.com/file/d/1G3dspwOzVdqpsrTjm1uhk1o-QCaH7BzE/view?usp=drive_link" },
      { label: "Minutes of Meeting - 26", link: "https://drive.google.com/file/d/159Ia7MSlZtmvxSq0Y5sk7pwG7zYSFi6O/view?usp=drive_link" },
      { label: "Action Taken Report - 25", link: "https://drive.google.com/file/d/1aPjKmN2mKYUnN3qFTLHh7TVPf2ck9gqX/view?usp=drive_link" },
    ],
    "Meeting 25": [
      { label: "Agenda of Meeting - 25", link: "https://drive.google.com/file/d/1DONkNa9zPlo8-_d2CCiizZMfB8dyi1sZ/view?usp=drive_link" },
      { label: "Minutes of Meeting - 25", link: "https://drive.google.com/file/d/16TaVk-QnXVKHFZqm_lQoJ3GqUNQjLwf1/view?usp=drive_link" },
      { label: "Action Taken Report - 24", link: "https://drive.google.com/file/d/1DTSIq9MjIkDofJd0dhPLJxebhPTAQ0py/view?usp=drive_link" },
    ],
  },
  "2023-24": {
    "Meeting 24": [
      { label: "Agenda of Meeting - 24", link: "https://drive.google.com/file/d/14TJEPxeXa3rfYbvIw38zqWOE4E3ksBa5/view?usp=drive_link" },
      { label: "Minutes of Meeting - 24", link: "https://drive.google.com/file/d/1bTokpt0XofWHh3wMbMx9ZYwWbZE92BBF/view?usp=drive_link" },
      { label: "Action Taken Report - 23", link: "https://drive.google.com/file/d/1lADRL9QIts_5W1n5v-RtrE1IUcR5TJvN/view?usp=drive_link" },
    ],
    "Meeting 23": [
      { label: "Agenda of Meeting - 23", link: "https://drive.google.com/file/d/1YpV4k7fVsHi3siP3g_k2YM9RAfkPl7-B/view?usp=drive_link" },
      { label: "Minutes of Meeting - 23", link: "https://drive.google.com/file/d/1gnh1Qgh_9324x47BYAFBUw1IbO2ImzcC/view?usp=drive_link" },
      { label: "Action Taken Report - 22", link: "https://drive.google.com/file/d/1Ch-qOQB7YNnMkWqXmwgyGQ84Vk_1Jduz/view?usp=drive_link" },
    ],
    "Meeting 22": [
      { label: "Agenda of Meeting - 22", link: "https://drive.google.com/file/d/1gD1tZoFrq9z1dfOzwc2qVPU-wR6yCQd8/view?usp=drive_link" },
      { label: "Minutes of Meeting - 22", link: "https://drive.google.com/file/d/1MtmEMRzG8hvA3PJla5JNMMaKgMniZ4pU/view?usp=drive_link" },
      { label: "Action Taken Report - 21", link: "https://drive.google.com/file/d/1K92hjqdg0hNkkcGKh6WPKf014KlsUHUY/view?usp=drive_link" },
    ],
    "Meeting 21": [
      { label: "Agenda of Meeting - 21", link: "https://drive.google.com/file/d/1rlO_sbRpawRAYlUVvlSaMA5GrLXvneMX/view?usp=drive_link" },
      { label: "Minutes of Meeting - 21", link: "https://drive.google.com/file/d/1Y8S45Omec9B8fxLm5SHpg2s3hPmxcMxr/view?usp=drive_link" },
      { label: "Action Taken Report - 20", link: "https://drive.google.com/file/d/1q-d0eNC-mO926PpeRY2A4N2tQzjkq0kC/view?usp=drive_link" },
    ],
  },
   "2022-23": {
   "Meeting 20": [
      { label: "Agenda of Meeting - 20", link: "https://drive.google.com/file/d/1o74Z1UBDun4n0580LsBl4ktEi1eiuZwU/view?usp=drive_link" },
      { label: "Minutes of Meeting - 20", link: "https://drive.google.com/file/d/11JRVBlC9r9x_gYGjuQAzHrZJ-ED0YUCG/view?usp=drive_link" },
      { label: "Action Taken Report - 19", link: "https://drive.google.com/file/d/14yrjj6QBqMra96nRKWIAYkr1IGsJdwvI/view?usp=drive_link" },
    ],
    "Meeting 19": [
      { label: "Agenda of Meeting - 19", link: "https://drive.google.com/file/d/1hFdzJXGh1hQbFYU5jkPDehrlMojIGuLB/view?usp=drive_link" },
      { label: "Minutes of Meeting - 19", link: "https://drive.google.com/file/d/1ohh4lp08rKiCHfkuN3Kwr9so6T-QM2DM/view?usp=drive_link" },
      { label: "Action Taken Report - 18", link: "https://drive.google.com/file/d/1NZDyC1db5P3hA3OBPearMGj7vm9bta0w/view?usp=drive_link" },
    ],
    "Meeting 18": [
      { label: "Agenda of Meeting - 18", link: "https://drive.google.com/file/d/1A2CJ2SBgg4BtoSDqI70aomkIEN5MBrsU/view?usp=drive_link" },
      { label: "Minutes of Meeting - 18", link: "https://drive.google.com/file/d/1fDgWPuvi3wPgbXG57VCbVgOerBHbI3jF/view?usp=drive_link" },
      { label: "Action Taken Report - 17", link: "https://drive.google.com/file/d/1UbvNQHiMat3lTySAnHhaeBKQ6-05eu0W/view?usp=drive_link" },
    ],
    "Meeting 17": [
      { label: "Agenda of Meeting - 17", link: "https://drive.google.com/file/d/1hVzik9HOJbYJWpqo4t4e6YYKSUShiifk/view?usp=drive_link" },
      { label: "Minutes of Meeting - 17", link: "https://drive.google.com/file/d/1L_tTV1OCqk6CqzUDtS3jHfP7QbLRC-lc/view?usp=drive_link" },
      { label: "Action Taken Report - 16", link: "https://drive.google.com/file/d/18XcguR3NoCUQKe_UpEIYPs9-4n5jKF6e/view?usp=drive_link" },
    ],
  },
  "2021-22": {
    "Meeting 16": [
      { label: "Agenda of Meeting - 16", link: "https://drive.google.com/file/d/1z1u4MbXBoEAkbluj9CPpucXlxacDFFlv/view?usp=drive_link" },
      { label: "Minutes of Meeting - 16", link: "https://drive.google.com/file/d/13IRMrgsHF4IDrYheu5s0_QRd3oNznc4u/view?usp=drive_link" },
      { label: "Action Taken Report - 15", link: "https://drive.google.com/file/d/1R-hqPHZZ09tn9YfE6u2O2-7ReHsunfRH/view?usp=drive_link" },
    ],
    "Meeting 15": [
      { label: "Agenda of Meeting - 15", link: "https://drive.google.com/file/d/1kcFbGfhzcYO-CJAmLHKzDthMnB-oPkIz/view?usp=drive_link" },
      { label: "Minutes of Meeting - 15", link: "https://drive.google.com/file/d/1NtfntYnQbwxV1G8J-CPTowyqdvmOcIvL/view?usp=drive_link" },
      { label: "Action Taken Report - 14", link: "https://drive.google.com/file/d/1PlL_057HhdzBL5CDnPwxuitFvT36xL4d/view?usp=drive_link" },
    ],
    "Meeting 14": [
      { label: "Agenda of Meeting - 14", link: "https://drive.google.com/file/d/1hFreXd4YAF9dF9EN3H7YxkAtJHtBrTj4/view?usp=drive_link" },
      { label: "Minutes of Meeting - 14", link: "https://drive.google.com/file/d/1oTHrpOgK4rkDSETOpAoO0luVZHYt6xkS/view?usp=drive_link" },
      { label: "Action Taken Report - 13", link: "https://drive.google.com/file/d/1fqA5ZDDf3r5NBIcLpDJd86vrHvA3oiV_/view?usp=drive_link" },
    ],
    "Meeting 13": [
      { label: "Agenda of Meeting - 13", link: "https://drive.google.com/file/d/1FqA6Y-S0B5lZHoPBFxumYtBOlOuv1IoU/view?usp=drive_link" },
      { label: "Minutes of Meeting - 13", link: "https://drive.google.com/file/d/1kYHTolmrnd8OlZf3l9zDqrJHByo4hk94/view?usp=drive_link" },
      { label: "Action Taken Report - 12", link: "https://drive.google.com/file/d/1X8OiB4YlPt7W1GnlyEZL0OkHAyqvfot0/view?usp=drive_link" },
    ],
  },
  "2020-21": {
    "Meeting 12": [
      { label: "Agenda of Meeting - 12", link: "https://drive.google.com/file/d/1FOavEcxFj6OEArrcFxZh8yleY75dqcWY/view?usp=drive_link" },
      { label: "Minutes of Meeting - 12", link: "https://drive.google.com/file/d/1bNAyE9VTQKUkQit3MMtmBkmNMAzfkPcR/view?usp=drive_link" },
      { label: "Action Taken Report -11", link: "https://drive.google.com/file/d/1V5QhaqrusQKoadzNlQvEHCjB0OzywHzg/view?usp=drive_link" },
    ],

    "Meeting 11": [
      { label: "Agenda of Meeting - 11", link: "https://drive.google.com/file/d/1N7uqytwvqJvsD_7SLDtfzIFtuow-v51k/view?usp=drive_link" },
      { label: "Minutes of Meeting - 11", link: "https://drive.google.com/file/d/1myv75SEXaJkGhL5zkOerXU_87Amdw8rX/view?usp=drive_link" },
      { label: "Action Taken Report -10", link: "https://drive.google.com/file/d/1pAYUkPMJjavtAjZulKbngj-dOfU6_ai3/view?usp=drive_link" },
    ],
    "Meeting 10": [
      { label: "Agenda of Meeting - 10", link: "https://drive.google.com/file/d/1-sCvP00gs2MBz1JHyO8XyIvo6roioAd9/view?usp=drive_link" },
      { label: "Minutes of Meeting - 10", link: "https://drive.google.com/file/d/1Wrw_4LCh6MS_b5qzKHRdYmQHLunjIf6a/view?usp=drive_link" },
      { label: "Action Taken Report - 9", link: "https://drive.google.com/file/d/1ewMV2SPtADdmyh5FOouKjLJnhZ_FjpaJ/view?usp=drive_link" },
    ],
    "Meeting 9": [
      { label: "Agenda of Meeting - 9", link: "https://drive.google.com/file/d/1RxgdRNEVpCzb-NaVcJCdtbYypSeJFL0l/view?usp=drive_link" },
      { label: "Minutes of Meeting - 9", link: "https://drive.google.com/file/d/1OQDnBmJBIyQUkhQC45hNWIg0KfG1m7um/view?usp=drive_link" },
      { label: "Action Taken Report - 8", link: "https://drive.google.com/file/d/1cJIt43wE9h6ZUV3x27JYpVNrpeilVRRA/view?usp=drive_link" },
    ],
  },
  "2019-20": {
    "Meeting 8": [
      { label: "Agenda of Meeting - 8", link: "https://drive.google.com/file/d/11c8uv-SyDXwV-R3rBBHYQ_9fKl7GJp3S/view?usp=drive_link" },
      { label: "Minutes of Meeting - 8", link: "https://drive.google.com/file/d/1dipIKWe2bwt1JmCV5p5PdPLlBZ7b56dK/view?usp=drive_link" },
      { label: "Action Taken Report - 7", link: "https://drive.google.com/file/d/1keUDIHv0Vx4PySTHZSK27YIjAbl_unib/view?usp=drive_link" },
    ],
    "Meeting 7": [
      { label: "Agenda of Meeting - 7", link: "https://drive.google.com/file/d/1CPFrTEJxKk7bye4meE0_qU55CwblvWJ3/view?usp=drive_link" },
      { label: "Minutes of Meeting - 7", link: "https://drive.google.com/file/d/1vmI8ztIYop2MGcUMWFNGGKKkWgLP99c6/view?usp=drive_link" },
      { label: "Action Taken Report - 6", link: "https://drive.google.com/file/d/1upfjJv-UsS8a9qxzyfj304ZcjilVndET/view?usp=drive_link" },
    ],
    "Meeting 6": [
      { label: "Agenda of Meeting - 6", link: "https://drive.google.com/file/d/1uFpF14pXNzogUpM8XBurdIgPvxk8QIK1/view?usp=drive_link" },
      { label: "Minutes of Meeting - 6", link: "https://drive.google.com/file/d/1fnbVx90uzGlRHb9HVy2isZQ0nczPs-90/view?usp=drive_link" },
      { label: "Action Taken Report - 5", link: "https://drive.google.com/file/d/1B19bwdFipcNbL0nKUQZTDySSWPY4lRVq/view?usp=drive_link" },
    ],
    "Meeting 5": [
      { label: "Agenda of Meeting - 5", link: "https://drive.google.com/file/d/1AjfaYG7ue9BOyWNy7QT5rMa-lQuXIMFC/view?usp=drive_link" },
      { label: "Minutes of Meeting - 5", link: "https://drive.google.com/file/d/10H3w04zWOv0ct3xpELEzq-xDdwTHcHUr/view?usp=drive_link" },
      { label: "Action Taken Report - 4", link: "https://drive.google.com/file/d/1hGO3ItnVbvlKNbzY2Kf6Pt6kBe4yY7CU/view?usp=drive_link" },
    ],
  },
  "2018-19": {
    "Meeting 4": [
      { label: "Agenda of Meeting - 4", link: "https://drive.google.com/file/d/1Toxhwt6ZjFwd6Oe3P6b-i7MGvUp7foop/view?usp=drive_link" },
      { label: "Minutes of Meeting - 4", link: "https://drive.google.com/file/d/1e07GZoQDxIO0MNVpLb_H2JYWVoNvwINF/view?usp=drive_link" },
      { label: "Action Taken Report - 3", link: "https://drive.google.com/file/d/1PyeMG1xq0PwNr8lXkuS1BeDH64KLCwML/view?usp=drive_link" },
    ],
    "Meeting 3": [
      { label: "Agenda of Meeting - 3", link: "https://drive.google.com/file/d/1K0_-R0KCyLMDcaouasmaU_4cTrfg6lni/view?usp=drive_link" },
      { label: "Minutes of Meeting - 3", link: "https://drive.google.com/file/d/1xf-9YGsSHWsZqdYpAP5EsIm4e3oHM1gg/view?usp=drive_link" },
      { label: "Action Taken Report - 2", link: "https://drive.google.com/file/d/1DIxlv69Q7QBbdOYdvzMNdHBgc3VWmz9h/view?usp=drive_link" },
    ],
    "Meeting 2": [
      { label: "Agenda of Meeting - 2", link: "https://drive.google.com/file/d/1LcurTH9_2LHEPBHsOXCQUObSXesWte2S/view?usp=drive_link" },
      { label: "Minutes of Meeting - 2", link: "https://drive.google.com/file/d/1GcZVhIf-DY932F62kZHNnKme2tBFbapO/view?usp=drive_link" },
      { label: "Action Taken Report - 1", link: "https://drive.google.com/file/d/1hoHKvO2lc2Ug3KKfgVjldoY5P4szgBXI/view?usp=drive_link" },
    ],
    "Meeting 1": [
      { label: "Agenda of Meeting - 1", link: "https://drive.google.com/file/d/1gtKA1rzapsHHdMISHlOcWJwNwcZ8GTCj/view?usp=drive_link" },
      { label: "Minutes of Meeting - 1", link: "https://drive.google.com/file/d/1uSE3OrwXk7LYMFAXJSttRCQw99-Pyd7c/view?usp=drive_link" },
      { label: "Action Taken Report - 0", link: "#" },
    ],
  },
};


// Enhanced data for IQAC Quality Activities with proper structure
const iqacQualityActivities = {
    '2023-2024': [
        {
            name: 'Innovation,Design,and Entrepreneurship(IDE) Bootcamp for Students Innovations and Teachers of Schools',
            organization: 'AICTE'
        },
        {
            name: '5th International Conference on Information Management & Machine Intelligence (ICIMMI-2023)',
            organization: 'Asian University and IIIT Nagpur'
        },
        {
            name: 'First International Conference on "Mathematics, Modelling and Statistics (ICMMS 2023)"',
            organization: 'ISTE'
        },
        {
            name: 'International Conference on Smart Innovations for Society (ICSIS- 2024)',
            organization: 'PIET'
        },
        {
            name: 'International Conference on Intelligent Systems & Computing (ICISC 2024)',
            organization: 'PIET'
        },
        {
            name: 'International Conference on Recent Advances in Artificial intelligence, Computer Vision & Smart Systems (ICRACS 2024)',
            organization: 'PIET'
        },
        {
            name: 'Smart India Hackathon (Software Edition) Grand Finale -2023',
            organization: 'Ministry of Education Govt of India and AICTE'
        },
        {
            name: 'Approach to Innovation and IPR Registration',
            organization: 'AICTE IDEA LAB'
        }
    ],
    '2022-2023': [
        {
            name: '4th International Conference on Information Management &Machine Intelligence (ICIMMI2022)',
            organization: 'ICPS (Published by ACM), ISTE, Computer society of India'
        },
        {
            name: 'Offline FDP on "Advanced Tools & Techniques for Quality Research Analysis & Writing"',
            organization: 'ISTE'
        },
        {
            name: 'Six days Faculty Development Program on "Python Programming A-Z"',
            organization: 'AICTE MODROB'
        },
        {
            name: 'Session on "Quality Enhancement through Reverse Engineering for Product Design Using CAD"',
            organization: 'CADEMATE'
        },
        {
            name: 'Offline FDP on "Advanced Tools & Techniques for Quality Research Analysis & Writing"',
            organization: 'ISTE'
        }
    ],
    '2021-2022': [
        {
            name: 'Faculty Development Program on "Effective Implementation of National Education Policy 2020"',
            organization: 'IQAC'
        },
        {
            name: 'One Week Skill Development Program on "Office Tools" for non-teaching staff',
            organization: 'IQAC'
        },
        {
            name: 'Faculty Induction Program on "Strategic Planning and Implementation in Teaching-Learning, Research and Innovations"',
            organization: 'IQAC'
        }
    ],
    '2020-2021': [
        {
            name: 'RTU-PIET Hackathon-21',
            organization: 'RTU-TEQIP-III'
        },
        {
            name: 'International Conference on "Post Covid Challenges on Life and Livelihood (ICPCC)"',
            organization: 'RTU-TEQIP-III'
        },
        {
            name: 'Five Days Short Term Training Program "Environmental Impacts of COVID-19 Pandemic: Challenges and Remedies through Science and Engineering"',
            organization: 'ISTE'
        },
        {
            name: 'Three days International Online Faculty Development Program on "Computational Mathematics for Engineers and Researchers"',
            organization: 'IQAC'
        }
    ],
    '2019-2020': [
        {
            name: 'A session on "Research and Development"',
            organization: 'IQAC'
        },
        {
            name: 'FDP on "Vision-Mission, CO, PO, PSO Mapping, Assessment and Attainment"',
            organization: 'IQAC'
        },
        {
            name: '"The Smart City" Hackathon 2020',
            organization: 'RTU-TEQIP-III'
        }
    ],
    '2018-2019': [
        {
            name: 'Session on "Elaborate the Quality Benchmarks"',
            organization: 'IQAC'
        },
        {
            name: 'Short Term Training Programme on "NBA Accreditation (ICT01)"',
            organization: 'NITTTR, Kolkata'
        },
        {
            name: 'FDP on "Quality Improvement in the Teaching Learning Process"',
            organization: 'IQAC'
        },
        {
            name: 'A session on "Improving the quality of Student Induction"',
            organization: 'AICTE-IDEA Lab'
        }
    ]
};

// Data for other dropdowns
const fdpWorkshopsData = {
    '2024-2025': [
        'Six Days FDP on Machine Learning',
        'FDP On Advanced Tools & Techniques for Quality Research, Innovation and Analysis',
        'Three Day Introductory Face to Face FDP on UHV',
        'Faculty Development Program on Mobile Application Development',
        'FDP on The Laser Cutting Training',
        'Five Days Faculty Development Programme on “Facilitating IGNITE Course in Entrepreneurship”'
    ],

    '2023-2024': [
        'FDP on Changing Paradigm for Quality of Teaching, Learning & Research under NEP-2020',
        'One week Training Program for Non-teaching Staff on Effective Team Building and Documentation',
        'FDP on "AI & NLP integrated IoMT System for Smart Healthcare in Indian Languages"',
        'FDP on Holistic Development and Outcome-Based Innovative Teaching and Learning Process and ERP System'
    ],
    '2022-2023': [
        'FDP on Holistic Development and Outcome-Based Innovative Teaching and Learning Process and ERP System',
        'Skill Development Program on “Office Tools”',
        'Faculty Development Programme On Python Programming A-Z',
        'FACULTY DEVELOPMENT PROGRAM ON HANDS- ON PRACTICE ON NETWORK PROGRAMMING',
        'Faculty Development Program On “Implementation of NEP 2020 in Higher Education Institutions (HEIs)”',
        'Faculty Induction Program On “Outcome Based Education with assessment and evaluation””',
        'Faculty Development Program on Applications of AR and VR in Architecture, Transportation and Construction',
        'Faculty Development Program on “Ethical hacking and Cyber Security”',
        'Faculty Development Programme On Advanced Tools & Techniques for Quality Research Analysis & Writing',
        'Faculty Development Program on Application of Neural Network and Machine Learning',
        'Faculty Development Program on REVERSE ENGINEERING FOR PRODUCT DESIGN USING CAD',
        'Faculty Development Program on FUTURE SCOPE OF ADDITIVE MANUFACTURING'
    ],
    '2021-2022': [
        'Short Term Course (STC) for Faculty on “Machine Learning using Python”',
        'Faculty Induction Program On “Strategic Planning and Implementation in Teaching-Learning, Research and Innovations”',
        'Faculty Development Program On “Effective Implementation of National Education Policy 2020”',
        'Workshop for Non-Teaching Staff On Personality and Overall Development',
        'Refresher program for Faculty on “Applications of Artificial Intelligence Using Machine Learning & Deep Learning”',
        'Faculty Development Program on PCB Design, Soldering, Assembly, and Enclosure Development using a PCB Milling machine, Laser Cutter, and 3D Printer',
        'FDP on IoT based Product Development (using Advanced Digital Manufacturing Equipment, Tools and Resources)',
        'Short Term Course (STC) for Faculty on “Machine Learning using Python”',
        'Faculty Development Program on “BlockChain and Its Applications”',
        'Faculty Development Programme On Student Induction',
        
    
    ],
    '2020-2021': [
        'Online Faculty Development Program on “Solar Energy Conversion & Storage”',
        'Faculty Development Programme On current status, “Effective online Teaching and New challenges in Technical Education due to Pandemic Situation”',
        'Faculty Induction Program on Effective teaching learning process and Importance of Outcome Based Teaching and Assessment Process',
        'Faculty Development Program on “Computational Mathematics for Engineers and Researchers”',
        'Faculty Development Programme on IOT using Raspberry-Pi',
        'Faculty Development Programme on “Cyber Security”',
        'Faculty Development Programme On “Geotechnical Assessment with Industrial Exposure”',
        'Faculty Development Programme On “Design & Analysis of building structure by using Extended Three-Dimensional analysis of Building System”',
        'Faculty Development Program on “Recent Trends in Digital Image Processing”',
        'Faculty Development Programme on “Big Data Analytics With Deep Learning”',
        'Short Term Training Programme (STTP) for Faculty On Image Processing and its Application-1',
        'Short Term Training Programme (STTP) for Faculty on Image Processing and its Application-2',
        'Second Short Term Training Programme (STTP) for Faculty On Image Processing and its Application-3',
    ],
    '2019-2020': [
        'Faculty Development Programme (FDP) On “Vision-Mission, CO, PO, PSO mapping, Assessment and Attainment”',
        'Faculty Development Program on Empowering faculty in Adopting Outcome Based Teaching Tools, Techniques & Methodologies',
        'Faculty Development Program on Stress Management: Healthy Mindset for Success and Training For non-teaching Staff',
        'Faculty Development Program on “Scientific Tools in Research Methodology”',
        'Faculty Workshop on “Strengthening Industry Academia Integration in Technical Institutions”',
        'Faculty Development Program on SECURE CLOUD COMPUTING AND IT’S REAL LIFE APPLICATIONS',
        'Faculty Development Programme On Machine Learning Using Python- 2',
        'Faculty Development Programm on machine learning using Python'
    ],
    '2018-2019': [
        'PASSPORT (Poornima Academic Skill Sensitization Program of Orientation and Training) For Technical Assistants (Non Teaching Staff)',
        'Academic Skill Sensitization Program of Orientation and Training For non-teaching Staff',
        'Faculty Development Programme on Student Induction',
        'Short Term Training Programme on “NBA Accreditation (ICT01)',
        'National Level Work shop on Internet of Things',
        '"Faculty Training Program on Quality Benchmarks and Effective Teaching Learning Paradigms through Pedagogical Innovations"'
    ]
};


const presidentInfo = {
    name: "Dr. Mukesh Chandra",
    designation: "Coordinator, IQAC",
    imageUrl: "images/iqac/Dr. Mukesh Chandra.jpg", // Replace with the actual image URL
    message: (
        <>
           It gives me immense pleasure to extend greetings on behalf of the Internal Quality Assurance Cell (IQAC) 
           of Poornima Institute of Engineering and Technology, Jaipur. As an autonomous institute, we are committed
            to fostering a culture of continuous improvement, academic excellence, and holistic development of our 
            students.<br />
The IQAC at PIET functions as the driving force for quality sustenance and enhancement by integrating innovative
 teaching–learning practices, outcome-based education, and robust research initiatives. In line with the vision
  of our institute and the guiding framework of NAAC, NBA, UGC, and NEP 2020, the cell constantly strives to create
   a learner-centric environment that nurtures creativity, critical thinking, and professional competence. 
   <br />
Our focus is not only on maintaining academic standards but also on promoting interdisciplinary learning, 
skill development, industry collaboration, and societal engagement. The IQAC ensures that best practices in 
governance, curriculum design, evaluation reforms,
 faculty empowerment, and student support services are effectively implemented across the institution. <br/> 

I sincerely acknowledge the dedication of our faculty members, staff, students, alumni, and stakeholders 
whose contributions are vital in strengthening the culture of quality at PIET. Together, we aspire to set 
benchmarks in higher education and empower our learners to excel 
in their chosen careers while upholding values of integrity, innovation, and social responsibility. <br />
With warm regards, <br/>
Prof. (Dr.) Mukesh Chandra</>
    ),
};

const academicCalendars = {
    '2025-26': ['Academic Calendar 2025-26(Even Sem)', 'Academic Calendar 2025-26(Odd Sem)'],
    '2024-25': ['Academic Calendar 2024-25(Even Sem)', 'Academic Calendar 2024-25(Odd Sem)'],
    '2023-24': ['Academic Calendar 2023-24(Even Sem)', 'Academic Calendar 2023-24(Odd Sem)'],
    '2022-23': ['Academic Calendar 2022-23(Even Sem)', 'Academic Calendar 2022-23(Odd Sem)'],
    '2021-22': ['Academic Calendar 2021-22(Even Sem)', 'Academic Calendar 2021-22(Odd Sem)'],
    '2020-21': ['Academic Calendar 2020-21(Even Sem)', 'Academic Calendar 2020-21(Odd Sem)'],
    '2019-20': ['Academic Calendar 2019-20(Even Sem)', 'Academic Calendar 2019-20(Odd Sem)'],
    '2018-19': ['Academic Calendar 2018-19(Even Sem)', 'Academic Calendar 2018-19(Odd Sem)']
};

const environmentAuditCertificates = {
    '2024-25': ['Environment Audit Certificate 2024-25'],
    '2023-24': ['Environment Audit Certificate 2023-24'],
    '2022-23': ['Environment Audit Certificate 2022-23'],
    '2021-22': ['Environment Audit Certificate 2021-22']
};

const environmentAuditReports = {
    '2023-24': ['Environment Audit Report 2023-24'],
    '2020-2023': ['Environment Audit Report 2020-2023']
};

const IQACPage = () => {
        const [openMeetingsYear, setOpenMeetingsYear] = useState<string | null>(null);
        const [openMeetingsSubItem, setOpenMeetingsSubItem] = useState<string | null>(null);
        const [openQualityYear, setOpenQualityYear] = useState<string | null>(null);
        const [openFDPYear, setOpenFDPYear] = useState<string | null>(null);
        const [openFDPItem, setOpenFDPItem] = useState<string | null>(null);
        const [openCalendarYear, setOpenCalendarYear] = useState<string | null>(null);
        const [openEnvCertYear, setOpenEnvCertYear] = useState<string | null>(null);
        const [openEnvReportYear, setOpenEnvReportYear] = useState<string | null>(null);


    // Helper function to get document links
    const getDocumentLink = (docName: string, year: string, meetingName: string) => {
        // Default fallback link
        return 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    const getFDPDocumentLink = (item: string, year: string) => {
        // Map specific FDP documents to their Google Drive links
        const fdpLinks = {
            // 2024-25
            'Six Days FDP on Machine Learning': 'https://drive.google.com/file/d/15EfPev8vSSTWy5eyy2bSsAxc_PiKSgnS/view?usp=drive_link',
            'FDP On Advanced Tools & Techniques for Quality Research, Innovation and Analysis': 'https://drive.google.com/file/d/1ffZUeUp_0bwdMJ0dsvInmcu2nji0vNJH/view?usp=drive_link',
            'Three Day Introductory Face to Face FDP on UHV': 'https://drive.google.com/file/d/1lKy0t2rjFvOMQagPZ0RjjTvGBjsOug68/view?usp=drive_link',
            'Faculty Development Program on Mobile Application Development': 'https://drive.google.com/file/d/1tMGTIA21ArbvgCCODAwUEdnMcWz4xG9N/view?usp=drive_link',
            'FDP on The Laser Cutting Training': 'https://drive.google.com/file/d/1tAjP4LTyjV-uYBd9ZuLPwxqZhmPzyuov/view?usp=drive_link',
            'Five Days Faculty Development Programme on “Facilitating IGNITE Course in Entrepreneurship”': 'https://drive.google.com/file/d/1eQS9gpzFIT5MtMmpbXOIHp-gVTTRrXm4/view?usp=drive_link',
            //2023-24
            'FDP on Changing Paradigm for Quality of Teaching, Learning & Research under NEP-2020': 'https://drive.google.com/file/d/1Hp6pWff4WsNFZsWHLl5SNznsbop1ti7a/view?usp=drive_link',
            'One week Training Program for Non-teaching Staff on Effective Team Building and Documentation': 'https://drive.google.com/file/d/1lhL9NS-KfJ6mbwoWMQ4rsLyy_Ia5HOo-/view?usp=drive_link',
            'FDP on "AI & NLP integrated IoMT System for Smart Healthcare in Indian Languages"': 'https://drive.google.com/file/d/1VxI2JWllGUCOMZ4AXVAw0eGfDTOvQG2D/view?usp=drive_link',
            'FDP on Holistic Development and Outcome-Based Innovative Teaching and Learning Process and ERP System': 'https://drive.google.com/file/d/1Nme0kCzihsTu0ZCPaNgsrG4XGNQ82Sne/view?usp=drive_link',
            //2022-23
            'Faculty Development Program on Faculty Preparedness Training': 'https://drive.google.com/file/d/1N_hCWGGdKRwsY4DLIrD11O8MriKehUWy/view?usp=drive_link',
            'Skill Development Program on “Office Tools”': 'https://drive.google.com/file/d/1dT8S9fkFrZwdzbpIGKiydl9DawCSdHba/view?usp=drive_link',
            'Faculty Development Programme On Python Programming A-Z': 'https://drive.google.com/file/d/1aRuAhSgA017_CBFiTSa4bWxD23rX4ECC/view?usp=drive_link',
            'FACULTY DEVELOPMENT PROGRAM ON HANDS- ON PRACTICE ON NETWORK PROGRAMMING': 'https://drive.google.com/file/d/1IX348SJCArU6KoSDkpOxi8Ks53S9DzTt/view?usp=drive_link',
            'Faculty Development Program On “Implementation of NEP 2020 in Higher Education Institutions (HEIs)”': 'https://drive.google.com/file/d/1vQ1TYppLTe7PJ8pxW1HqXKx-YwWCGA4D/view?usp=drive_link',
            'Faculty Induction Program On “Outcome Based Education with assessment and evaluation”': 'https://drive.google.com/file/d/1Smjm2ul0OFqVZNNv8KNKKgZY3UXkeLig/view?usp=drive_link',
            'Faculty Development Program on Applications of AR and VR in Architecture, Transportation and Construction': 'https://drive.google.com/file/d/12IMDY3WEd8Tfq2CnGLodhmjRg0_jJKFc/view?usp=drive_link',
            'Faculty Development Program on “Ethical hacking and Cyber Security”': 'https://drive.google.com/file/d/1adrTHWSL0slhD1r2DoaZIXiLBuzuxigk/view?usp=drive_link',
            'Faculty Development Programme On Advanced Tools & Techniques for Quality Research Analysis & Writing': 'https://drive.google.com/file/d/1DBf09RuIL_LqDlHVqqKTCcDkRp7u8BuV/view?usp=drive_link',
            'Faculty Development Program on Application of Neural Network and Machine Learning': 'https://drive.google.com/file/d/1LJonNdgL92p_jGn1u__JahQTPlmd9CEK/view?usp=drive_link',
            'Faculty Development Program on REVERSE ENGINEERING FOR PRODUCT DESIGN USING CAD': 'https://drive.google.com/file/d/1u-ncVDoPJz1FBD4JoU7Asn5YioG6u6fQ/view?usp=drive_link',
            'Faculty Development Program on FUTURE SCOPE OF ADDITIVE MANUFACTURING': 'https://drive.google.com/file/d/1uB_1FS7blnbU7sARZ2Y4ghjLN6eSMGtB/view?usp=drive_link',
            //2021-22
            '“Strategic Planning and Implementation in Teaching-Learning, Research and Innovations”': 'https://drive.google.com/file/d/1xRzrYmtQT7DJFUy-nqkpcSzwSaLckn6b/view?usp=drive_link',
            'Faculty Induction Program On “Strategic Planning and Implementation in Teaching-Learning, Research and Innovations”': 'https://drive.google.com/file/d/1l5v7W-1JJ90dtDjjN0FjxxlxxvHpY791/view?usp=drive_link',
            'Faculty Development Program On “Effective Implementation of National Education Policy 2020”': 'https://drive.google.com/file/d/1fjTJqLQBTR8NLVvQP0EEZyr3BYjAu-m-/view?usp=drive_link',
            'Workshop for Non-Teaching Staff On Personality and Overall Development.': 'https://drive.google.com/file/d/11Zy9rBDpIyyHPX5ncqgBwvZG31ykpIk_/view?usp=drive_link',
            'Refresher program for Faculty on “Applications of Artificial Intelligence Using Machine Learning & Deep Learning”': 'https://drive.google.com/file/d/1H4io_9l3TR5wSlvZqxAi9ysMG1S9nZP6/view?usp=drive_link',
            'Faculty Development Program on PCB Design, Soldering, Assembly, and Enclosure Development using a PCB Milling machine, Laser Cutter, and 3D Printer': 'https://drive.google.com/file/d/1SnvajPBqHhnQfkTTBhK5tNal8Zx9UJ5k/view?usp=drive_link',
            'FDP on IoT based Product Development (using Advanced Digital Manufacturing Equipment, Tools and Resources)': 'https://drive.google.com/file/d/1iaaPRYADNK7bMhkh_9U3-Sn43tz9TIkg/view?usp=drive_link',
            'Faculty Development Program on “BlockChain and Its Applications”': 'https://drive.google.com/file/d/17idbHTjjg2deF2TU4Y7VTlH7uQjKyfY6/view?usp=sharing',
            'Short Term Course (STC) for Faculty on “Machine Learning using Python”': 'https://drive.google.com/file/d/1C-ta1rqe04mgBY36EcW07WEJ1mQAlrRr/view?usp=drive_link',
            'Faculty Development Programme On Student Induction': 'https://drive.google.com/file/d/1qKdjRCNKqc81H3p6jKCeWIe5q2zuUAwk/view?usp=drive_link',
            //2020-21
            'Online Faculty Development Program on “Solar Energy Conversion & Storage”': 'https://drive.google.com/file/d/13N8bNcXY9ZgyncSyBkFFL0DaM9VU3SvN/view?usp=drive_link',
            'Faculty Development Programme On current status, “Effective online Teaching and New challenges in Technical Education due to Pandemic Situation”': 'https://drive.google.com/file/d/1I97Y2j4-192khW9pyedhHY7k6pyyGIzt/view?usp=drive_link',
            'Faculty Induction Program on Effective teaching learning process and Importance of Outcome Based Teaching and Assessment Process': 'https://drive.google.com/file/d/1uoJI-4C_7bYp9yGVooaT9em3ED-x4dkw/view?usp=drive_link',
            'Faculty Development Program on “Computational Mathematics for Engineers and Researchers”': 'https://drive.google.com/file/d/1deObc96S4x9fr8KEvcsqQRcLf2bPulfG/view?usp=drive_link',
            'Faculty Development Programme on IOT using Raspberry-Pi': 'https://drive.google.com/file/d/1XI3T71fTIA3YPU_dFwYW-njfWBlGNW2f/view?usp=drive_link',
            'Faculty Development Programme on “Cyber Security”': 'https://drive.google.com/file/d/10ziRALhg2JyZ0EVs_z3PnrHHuW0wYtId/view?usp=drive_link',
            'Faculty Development Programme On “Geotechnical Assessment with Industrial Exposure”': 'https://drive.google.com/file/d/1l0VbPGyMfI8ZVxb-ViLOswBz-DfHCaZz/view?usp=drive_link',
            'Faculty Development Programme On “Design & Analysis of building structure by using Extended Three-Dimensional analysis of Building System”': 'https://drive.google.com/file/d/11ZDU9NIdqLNRBGsYr3uSOrFnQ39gZmDT/view?usp=drive_link',
            'Faculty Development Program on “Recent Trends in Digital Image Processing”3': 'https://drive.google.com/file/d/1sU_S9qnebriID6k-k4-uGCf5hEE3M3gb/view?usp=drive_link',
            'Faculty Development Programme on “Big Data Analytics With Deep Learning”': 'https://drive.google.com/file/d/1k6b6ttoBo45x9BitKh32WjhtxWdd6rWg/view?usp=drive_link',
            'Short Term Training Programme (STTP) for Faculty On Image Processing and its Application-1': 'https://drive.google.com/file/d/10WAWY0wQD0mBI1qzs4c-BEcqPfK3An-K/view?usp=drive_link',
            'Short Term Training Programme (STTP) for Faculty on Image Processing and its Application-2': 'https://drive.google.com/file/d/1eHzJgFuiw0F8PSp1HB8DDRJrwXD-fUWl/view?usp=drive_link',
            'Second Short Term Training Programme (STTP) for Faculty On Image Processing and its Application-3': 'https://drive.google.com/file/d/1YTLwH_2TYSDYZsilr21UNAmDogmjhqPL/view?usp=drive_link',

            //2019-20   
            '	Faculty Development Programme (FDP) On “Vision-Mission, CO, PO, PSO mapping, Assessment and Attainment”': 'https://drive.google.com/file/d/17idbHTjjg2deF2TU4Y7VTlH7uQjKyfY6/view?usp=drive_link',
            '	Faculty Development Program on Empowering faculty in Adopting Outcome Based Teaching Tools, Techniques & Methodologies': 'https://drive.google.com/file/d/1_yok6xWuUrsyeL-2F2-lMZmk1j6K12Mz/view?usp=drive_link',
            'Faculty Development Program on Stress Management: Healthy Mindset for Success and Training For non-teaching Staff': 'https://drive.google.com/file/d/1XVVwb5Hgjp3OgxBheYKcuJXNZDiS6LYL/view?usp=drive_link',
            '	Faculty Development Program on “Scientific Tools in Research Methodology”': 'https://drive.google.com/file/d/1MB-jXs7Sk58HUIsuS7dZtj8RbA5cYCEz/view?usp=drive_link',
            '	Faculty Workshop on “Strengthening Industry Academia Integration in Technical Institutions”': 'https://drive.google.com/file/d/1niX4dwHNKIQJTsnVoT7PQuAD7gyenx4b/view?usp=drive_link',
            '	Faculty Development Program on SECURE CLOUD COMPUTING AND IT’S REAL LIFE APPLICATIONS': 'https://drive.google.com/file/d/1MN40o0V-j1Nidq3dUsYW4FS-b9Ti-DsQ/view?usp=drive_link',
            '	Faculty Development Programme On Machine Learning Using Python- 2': 'https://drive.google.com/file/d/1KBqobeP98zCzwdaXl4VUvvrAyiHLqgl5/view?usp=drive_link',
            'Faculty Development Programm on machine learning using Python': 'https://drive.google.com/file/d/1ceEKfYBTLyMw04CR5D6C6Xw0aZLNgLxN/view?usp=drive_link',  
            
            //2018-19
            '	PASSPORT (Poornima Academic Skill Sensitization Program of Orientation and Training) For Technical Assistants (Non Teaching Staff)': 'https://drive.google.com/file/d/1M9h19VW15XHzJxCb_LPAwiyJVMXTW_13/view?usp=drive_link',
            'Academic Skill Sensitization Program of Orientation and Training For non-teaching Staff': 'https://drive.google.com/file/d/1kYqXfn1Vw76wLfjvgUYCtoNldzoegRG4/view?usp=drive_link',
            'Faculty Development Programme on Student Induction': 'https://drive.google.com/file/d/1s7OTKkiqXbeiydaGAzxGA-pUcno1uIvT/view?usp=drive_link',
            '	Short Term Training Programme on “NBA Accreditation (ICT01)”': 'https://drive.google.com/file/d/1j6ZakwJdMffy2sIK8VWpvG3IjjX2u85a/view?usp=drive_link',
            'National Level Work shop on Internet of Things': 'https://drive.google.com/file/d/13FZHPtHfAblPebPja3tTJHPaCNf9HDbg/view?usp=drive_link',
            '"Faculty Training Program on Quality Benchmarks and Effective Teaching Learning Paradigms through Pedagogical Innovations"': 'https://drive.google.com/file/d/19RCL70r4LxKhOS_Kb-TWfJs7Dw3efs2j/view?usp=drive_link',

        };
        
        return fdpLinks[item as keyof typeof fdpLinks] || 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    const getSimpleDocumentLink = (item: string, year: string) => {
        // Map specific documents to their Google Drive links
        const documentLinks = {
            'Academic Calendar 2025-26(Even Sem)': 'https://drive.google.com/file/d/114eiQ33-Yzq-fjUiW3L0-k71H8a-1512/view?usp=drive_link',
            'Academic Calendar 2025-26(odd Sem)': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'Academic Calendar 2024-25(Even Sem)': 'https://drive.google.com/file/d/1DCIpAmnUo-qNIHhIIq_SdNkU2P8Rr_b6/view?usp=drive_link',
            'Academic Calendar 2024-25(odd Sem)': 'https://drive.google.com/file/d/1Z10c6asqk5Bb_W-VjMoWX26H_NqcmdzN/view?usp=drive_link',
            'Academic Calendar 2023-24(Even Sem)': 'https://drive.google.com/file/d/1DZzwWrRi0hxUBCqYOGHx5P9UewNvl7Qc/view?usp=drive_link',
            'Academic Calendar 2023-24(odd Sem)': 'https://drive.google.com/file/d/1IeCM6073V-mE1dCMoEn0iXa8Py-zm2x5/view?usp=drive_link',
            'Academic Calendar 2022-23(Even Sem)': 'https://drive.google.com/file/d/1RHIq8jjIkNd6MajBPjTRYIVxkG2yrOtZ/view?usp=drive_link',
            'Academic Calendar 2022-23(odd Sem)': 'https://drive.google.com/file/d/1XIVYmaBm5eDypXAzhxt6bmn3ut8MWeap/view?usp=drive_link',
            'Academic Calendar 2021-22(Even Sem)': 'https://drive.google.com/file/d/1LXHZaeHV8lwaZFiYzR7iv6UuXuBb6H14/view?usp=drive_link',
            'Academic Calendar 2021-22(odd Sem)': 'https://drive.google.com/file/d/1ZOftDcnoY-cM29UY5bWU-LLsF97AyGEY/view?usp=drive_link',
            'Academic Calendar 2020-21(Even Sem)': 'https://drive.google.com/file/d/156xy_od6NG_8GtqsvwdO-Z9aYZegxek0/view?usp=drive_link',
            'Academic Calendar 2020-21(odd Sem)': 'https://drive.google.com/file/d/1Mc3968IpAPdBhvuKGQ3mL7Cl3hRsuIDp/view?usp=drive_link',
            'Academic Calendar 2019-20(Even Sem)': 'https://drive.google.com/file/d/1jfq_h6M2T69OlH19Ow3rmzXFcKATd8Dg/view?usp=drive_link',
            'Academic Calendar 2019-20(odd Sem)': 'https://drive.google.com/file/d/12pRArytQQFbf5G8k8tKgJ6UCRidRgGfI/view?usp=drive_link',
            'Academic Calendar 2018-19(Even Sem)': 'https://drive.google.com/file/d/1Yv_gSWQAdnpN0VJf4G8LuaGDl9ZPCbsX/view?usp=drive_link',
            'Academic Calendar 2018-19(odd Sem)': 'https://drive.google.com/file/d/1AXJTcr_h4QJjzj65YK-u1QoJoA6IbOmh/view?usp=drive_link',
            
            'Environment Audit Certificate': 'https://drive.google.com/file/d/1go2UONAOssmyJpJpovkgu2ESauCIflxD/view?usp=sharing',
            'Environment Audit Report': 'https://drive.google.com/file/d/1go2UONAOssmyJpJpovkgu2ESauCIflxD/view?usp=sharing'
        };
        
        return documentLinks[item as keyof typeof documentLinks] || 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    const getTableDocumentLink = (item: string) => {
        // Map specific table documents to their Google Drive links
        const tableLinks = {
            'Quality Policy': 'https://drive.google.com/file/d/1lR9Qb2UeYQmrHCRVtsXZl5KFqL6fcMrm/view?usp=drive_link',
            'IQAC Handbook': 'https://drive.google.com/file/d/1StGgGUMWj8RwFdhvO3-1I1LM0NVGF-PA/view?usp=drive_link',
            'IQAC Initiatives (from 2023-24)': 'https://drive.google.com/file/d/1hfIG2OhZz5UUKs8VT008NG3Qu4SBP76_/view?usp=drive_link',
            'IQAC Initiatives (After 2018)': 'https://drive.google.com/file/d/1hfIG2OhZz5UUKs8VT008NG3Qu4SBP76_/view?usp=drive_link',
            'IQAC Initiatives (Before 2018)': 'https://drive.google.com/file/d/1SHI5G6qmxlekI8oboO2bi7PLk6wKt5yA/view?usp=drive_link',
            'Institute Perspective Plan': 'https://drive.google.com/file/d/1hngR8eTnq4e41lN4jjGeJPCgOHvR2C20/view?usp=drive_link',
            'AQAR (2022-23)': 'https://drive.google.com/file/d/1T_IdcyH4h07wBz_LKu7hZfiploucLRfX/view?usp=drive_link',
            'AQAR (2021-22)': 'https://drive.google.com/file/d/1wbbT8ySp4BtU1zwvcJtuiXBFSiEe4z4i/view?usp=drive_link',
            'AQAR (2020-21)': 'https://drive.google.com/file/d/1Hdooz58CRXEv-LiLMjjFyp7CijbQ4Kes/view?usp=drive_link',
            'AQAR (2019-20)': 'https://drive.google.com/file/d/1SbJ0NqGApQhY_7DRJNt6V-qG66CUn8Ph/view?usp=drive_link',
            'AQAR (2018-19)': 'https://drive.google.com/file/d/1ozoEJ1Q1HgBxx_Qi8jb7RD_TnwsnE1wV/view?usp=drive_link',
            'Academic & Administrative Audit 2023-24': 'https://drive.google.com/file/d/1LWhzyZRsjHxkSchCTK_v0wnJa6zpx2qZ/view?usp=drive_link',
            'Academic & Administrative Audit 2022-23': 'https://drive.google.com/file/d/1FnXuO5LmT6BLxBt8exQQw7Unot9w1-yZ/view?usp=drive_link',
            'Academic & Administrative Audit 2021-22': 'https://drive.google.com/file/d/11IOe4Flk9eU5cJ8hlvtoMd01FbOoWZn5/view?usp=drive_link',
            'Academic & Administrative Audit 2020-21': 'https://drive.google.com/file/d/1SLiD_-xilJKRenkVUMiXUSLpvJaOvBZG/view?usp=drive_link',
            'Academic & Administrative Audit 2019-20': 'https://drive.google.com/file/d/1PLhjSQHoyLbK4c8xuoDi6pFHVqKs9JtV/view?usp=drive_link',
            'Academic & Administrative Audit 2018-19': 'https://drive.google.com/file/d/1wjLwaqZp0Yj9uttE3jbIN-yqoCbc0-X_/view?usp=drive_link',
            'Constitution 2025-26': 'https://drive.google.com/file/d/1eKYQblAON5H-VC2A5LMZ_EwWUj1bzlBG/view?usp=drive_link',
            'Constitution 2024-25 (After Visit)': 'https://drive.google.com/file/d/1mJ4hXVjTrdMdhrLg8E7dZJSEjx09KvmZ/view?usp=drive_link',
            'Constitution 2024-25': 'https://drive.google.com/file/d/1yAbRUHkNg5-tVhmrVWresdbPEKhLgRD2/view?usp=drive_link',
            'Constitution 2023-24': 'https://drive.google.com/file/d/12YAfJMZTsvsKXkjsufwa18eb6r-_ZXJK/view?usp=drive_link',
            'Constitution 2022-23': 'https://drive.google.com/file/d/1vAGpTs9Mes2AQic3jZSyRGMrOh05N_Fv/view?usp=drive_link',
            'Constitution 2021-22': 'https://drive.google.com/file/d/1SsOBdWdtU6cGEcC9gwCggUwju5h7Jjmn/view?usp=drive_link',
            'Constitution 2020-21': 'https://drive.google.com/file/d/1GHoqvIuLiaWdTvBuHv7NW5J7jvp8VIDq/view?usp=drive_link',
            'Constitution 2019-20': 'https://drive.google.com/file/d/1YdX1uAwKbjb_n1Rf-RzDO0rXCgIiARqi/view?usp=drive_link',
            'Constitution 2018-19': 'https://drive.google.com/file/d/1oYvAJNmYpCL0jB5QIxGgOFXhI_Je78PO/view?usp=drive_link',
            'Strategic Development Plan 2023 Onwards': 'https://drive.google.com/file/d/1eJORm08gjep8R46EDf61TdRJCEG52582/view?usp=drive_link',
            'Measured Analysis of Strategic Development Plan 2018-22 by IQAC': 'https://drive.google.com/file/d/12l61bQYBDuGbMCiMsicYst6A0VFruk3b/view?usp=drive_link',
            'Strategic Development Plan 2018-22': 'https://drive.google.com/file/d/1phX8UevHJD6qnfpc62notNvmL2h2emjl/view?usp=drive_link',
            'Feedback Policy': 'https://drive.google.com/file/d/1sOoHBFvehmUkOoAII9HXp6WVUip1mdBg/view?usp=drive_link',
            'Alumni Survey Questionnaire': 'https://drive.google.com/file/d/1m02raRcciTrcGPwvwrf4YytPD6T4iqga/view?usp=drive_link',
           'Employer\'s Feedback Form': 'https://drive.google.com/file/d/1wo2hUSrw3yxjdqFR1lHVRm8GsVC7F9at/view?usp=drive_link',
            'Faculty Feedback form': 'https://drive.google.com/file/d/145mXzj7rTtWBucHSX8psccBwoL4ICHQp/view?usp=drive_link',
            'Student Feedback form on Ambience': 'https://drive.google.com/file/d/1VBDK_kFoDULC6wguHwg5LGw9ONZL6woU/view?usp=drive_link',
            'Student Feedback form on Academics': 'https://drive.google.com/file/d/1GywY6_Xuf1z8ZYoWi1mKkQ40oqZkX_hT/view?usp=drive_link',
            'Student Feedback on Academics over ERP (Process)': 'https://drive.google.com/file/d/1NCkjC-niVMM3iMJvB4-NTyaIMi7AdYHv/view?usp=drive_link',
            'Action Taken Report of Feedback (2024-25)': 'https://drive.google.com/file/d/1k8322p0PYJRb_Yn2C_KY8kZkzSo3bR78/view?usp=drive_link',
             'Feedback Analysis (2024-25)': 'https://drive.google.com/file/d/1n70wjTXIQVXt56lsSsHY3gCqxtutirCW/view?usp=drive_link',
            'Action Taken Report of Feedback (2023-24)': 'https://drive.google.com/file/d/1S6Uaw35s9s1yY9WADCaACMAMJjKw8yuc/view?usp=drive_link',
             'Feedback Analysis (2023-24)': 'https://drive.google.com/file/d/12r5uy8xlvbl9dIFP-hwzV5DwNPyZOhSp/view?usp=drive_link',
            'Action Taken Report of Feedback (2022-23)': 'https://drive.google.com/file/d/1pwy8XaSNz3QKl-jBDQDhF-4VQglCW2iX/view?usp=drive_link',
            'Feedback Analysis (2022-23)': 'https://drive.google.com/file/d/1NzWNwh9siMlwYdg80IDfGcTOffAvsnsU/view?usp=drive_link',
            'Action Taken Report of Feedback (2021-22)': 'https://drive.google.com/file/d/1t7tSDMYsdZkYidNEKreBuCrn8xngqpTB/view?usp=drive_link',
            'Feedback Analysis (2021-22)': 'https://drive.google.com/file/d/1W54wsp1y_oHOCjCBphfXiFQLKIWWCwwL/view?usp=drive_link',
           'Action Taken Report of Feedback (2020-21)': 'https://drive.google.com/file/d/1rOZs3Aq4QvurNDtzIOik3ncG2wTU0rEU/view?usp=drive_link',
            'Feedback Analysis (2020-21)': 'https://drive.google.com/file/d/10eB0DIswfsY9pi-7S63yIZ8TLx7sfXHt/view?usp=drive_link',
            'Action Taken Report of Feedback (2019-20)': 'https://drive.google.com/file/d/1hJq0YStuoUmT5DvwAGrqRpkJYOojOp7Y/view?usp=drive_link',
            'Feedback Analysis (2019-20)': 'https://drive.google.com/file/d/1KS4RkuKtZrHcCrEDs93N8GRqHfYXRohZ/view?usp=drive_link',
            'Action Taken Report of Feedback (2018-19)': 'https://drive.google.com/file/d/1kGEnczIyd05z07cwMRIpQRv2gVwOfl1n/view?usp=drive_link',
            'Feedback Analysis (2018-19)': 'https://drive.google.com/file/d/1Y3MbalCOhKQreesU6jaYSWH8gYoTXtYV/view?usp=drive_link',
            'Students Satisfaction Survey 2024-25': 'https://drive.google.com/file/d/1srRJ9gXIj4PwJePJHnIrqpFleplke7Bf/view?usp=drive_link',
            'Students Satisfaction Survey 2023-24': 'https://drive.google.com/file/d/1g6FLs6UNjJz8xWiVabMbx06n8y69owlk/view?usp=drive_link',
            'Students Satisfaction Survey 2022-23': 'https://drive.google.com/file/d/1jPCi4djBraWohjEVCIdo2yqgrwouiLrw/view?usp=drive_link',
            'Students Satisfaction Survey 2021-22': 'https://drive.google.com/file/d/1hK-speuh2Z1lOlCqjOuU5fJkpbO9rhDj/view?usp=drive_link',
            'Students Satisfaction Survey 2020-21': 'https://drive.google.com/file/d/1q8fzzRb02XD32lvxa9DQR8a92JrIQ0R4/view?usp=drive_link',
            'Students Satisfaction Survey 2019-20': 'https://drive.google.com/file/d/1yosVGBLSnO0eopZe803xa46Wjc24VyDN/view?usp=drive_link',
            'Students Satisfaction Survey 2018-19': 'https://drive.google.com/file/d/1g6FLs6UNjJz8xWiVabMbx06n8y69owlk/view?usp=drive_link',
            'Best Practices 1': 'https://drive.google.com/file/d/1i5AsKxlkjG4L6mn9z-EEG_Tk8QD1S1vt/view?usp=drive_link',
            'Best Practices 2': 'https://drive.google.com/file/d/16nSCqyCgykjI6XFonAcjWsdnw1CGJGMW/view?usp=drive_link',
            'Best Practices 1 Evidence': 'https://drive.google.com/file/d/1gui-YAhh0c7tgiRcK1sR5daGuLDsGsbO/view?usp=drive_link',
            'Best Practices 2 Evidence': 'https://drive.google.com/file/d/1EIGE2YiMvo5JTLV6AGJbTmxqisNGTGJa/view?usp=drive_link',
            'Institute Distinctiveness': 'https://drive.google.com/file/d/1j9mr-djWjcJ1CmJZFS17UIkIL85N8hul/view?usp=drive_link',
            'Institute Distinctiveness Evidences': 'https://drive.google.com/file/d/1tn5N9VbYQbK_rdFVp0bri2QsWRin--Aa/view?usp=drive_link',
            'Green Initiatives': 'https://drive.google.com/file/d/1EM1vEyxZarhIJjP3ZK_Bts6hVh7mVsbU/view?usp=drive_link',
            'Events on Green Practices': 'https://drive.google.com/file/d/1iSnxE41_EniviqozWH2gSw6MuGGBRVgu/view?usp=drive_link',

        };

        return tableLinks[item as keyof typeof tableLinks] || 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    // Triple Nested Dropdown for IQAC Meetings
    const TripleNestedDropdown = ({ title, data, openYear, setOpenYear, openSubItem, setOpenSubItem, icon: Icon }: { title: string; data: Record<string, Record<string, { label: string; link: string }[]>>; openYear: string | null; setOpenYear: (year: string | null) => void; openSubItem: string | null; setOpenSubItem: (item: string | null) => void; icon: React.ComponentType<{ className?: string }> }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, meetings]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => {
                                setOpenYear(openYear === year ? null : year);
                                setOpenSubItem(null);
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-blue-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    {Object.keys(meetings).length} meetings
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-200" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-blue-600 transition-transform duration-200" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-blue-50 space-y-3">
                                {Object.entries(meetings).map(([meetingName, documents]) => (
                                    <div key={meetingName} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
                                        <button
                                            className="w-full text-left p-4 text-gray-700 hover:bg-blue-50 focus:outline-none flex justify-between items-center group"
                                            onClick={() => setOpenSubItem(openSubItem === `${year}-${meetingName}` ? null : `${year}-${meetingName}`)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Users className="h-4 w-4 text-blue-500 group-hover:text-blue-600" />
                                                <span className="font-medium">{meetingName}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                                    {documents.length} docs
                                                </span>
                                                {openSubItem === `${year}-${meetingName}` ? (
                                                    <ChevronDown className="h-4 w-4 text-blue-500" />
                                                ) : (
                                                    <ChevronRight className="h-4 w-4 text-blue-500" />
                                                )}
                                            </div>
                                        </button>
                                        {openSubItem === `${year}-${meetingName}` && (
                                            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
                                                <div className="space-y-3">
                                                   {documents.map((doc, idx) => (
                                                            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                                                                <div className="flex items-center gap-3">
                                                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                                                                    {String(idx + 1).padStart(2, '0')}
                                                                </span>
                                                                <FileText className="h-4 w-4 text-blue-500" />
                                                                <span className="text-gray-700 font-medium">{doc.label}</span>
                                                                </div>
                                                                <a
                                                                href={doc.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                                                                onClick={(e) => e.stopPropagation()}
                                                                >
                                                                <Download className="h-3 w-3" />
                                                                Download
                                                                </a>
                                                            </div>
                                                            ))}

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    // Enhanced Quality Activities Dropdown with table structure
    const QualityActivitiesDropdown = ({ title, data, openYear, setOpenYear, icon: Icon }: { title: string; data: Record<string, Array<{ name: string; organization: string }>>; openYear: string | null; setOpenYear: (year: string | null) => void; icon: React.ComponentType<{ className?: string }> }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, activities]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => setOpenYear(openYear === year ? null : year)}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-blue-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    {activities.length} activities
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-blue-600" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-blue-600" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="bg-gradient-to-br from-gray-50 to-blue-50">
                                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                                    <div className="grid grid-cols-12 gap-4 p-4">
                                        <div className="col-span-1 font-semibold text-sm">S. No.</div>
                                        <div className="col-span-7 font-semibold text-sm">Name of quality initiative by IQAC</div>
                                        <div className="col-span-4 font-semibold text-sm">Collaborating Organization/Institute</div>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {activities.map((activity, idx) => (
                                        <div key={idx} className="grid grid-cols-12 gap-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group">
                                            <div className="col-span-1 flex items-center">
                                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <div className="col-span-7 flex items-center">
                                                <div className="flex items-start gap-3">
                                                    <Award className="h-4 w-4 text-blue-500 group-hover:text-blue-600 mt-1 flex-shrink-0" />
                                                    <span className="font-medium text-gray-800 group-hover:text-gray-900 text-sm leading-relaxed">{activity.name}</span>
                                                </div>
                                            </div>
                                            <div className="col-span-4 flex items-center">
                                                <div className="flex items-start gap-2">
                                                    <Users className="h-4 w-4 text-purple-500 group-hover:text-purple-600 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700 group-hover:text-gray-800 text-sm leading-relaxed">{activity.organization}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const ModernDoubleDropdown = ({ title, data, openYear, setOpenYear, openItem, setOpenItem, icon: Icon }: { title: string; data: Record<string, string[]>; openYear: string | null; setOpenYear: (year: string | null) => void; openItem: string | null; setOpenItem: (item: string | null) => void; icon: React.ComponentType<{ className?: string }> }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, items]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => {
                                setOpenYear(openYear === year ? null : year);
                                setOpenItem(null);
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-purple-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    {items.length} items
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-purple-600 transition-transform duration-200" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-purple-600 transition-transform duration-200" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-purple-50 space-y-3">
                                <div className="py-2">
                                    {items.map((item, idx) => (
                                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
                                            <button
                                                type="button"
                                                className="w-full text-left p-4 text-gray-700 hover:bg-purple-50 focus:outline-none flex justify-between items-center group"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenItem(openItem === `${year}-${idx}` ? null : `${year}-${idx}`);
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <FileText className="h-4 w-4 text-purple-500 group-hover:text-purple-600" />
                                                    <span className="font-medium">{item}</span>
                                                </div>
                                                {openItem === `${year}-${idx}` ? (
                                                    <ChevronDown className="h-4 w-4 text-purple-500" />
                                                ) : (
                                                    <ChevronRight className="h-4 w-4 text-purple-500" />
                                                )}
                                            </button>
                                            {openItem === `${year}-${idx}` && (
                                                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-gray-200">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-1">
                                                            <p className="text-sm text-gray-600 mb-3">
                                                                Access and download the complete document for "{item}".
                                                                This document contains detailed information and official records.
                                                            </p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                                                <CheckCircle className="h-3 w-3 text-green-500" />
                                                                <span>Verified Document</span>
                                                                <span>•</span>
                                                                <span>Last Updated: {year}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <a
                                                            href={getFDPDocumentLink(item, year)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Download className="h-4 w-4" />
                                                            Download PDF
                                                        </a>
                                                        <a
                                                            href={getFDPDocumentLink(item, year)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                            Preview
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const ModernTable = ({ title, data, icon: Icon }: { title: string; data: string[]; icon: React.ComponentType<{ className?: string }> }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                    <div className="grid grid-cols-12 gap-4 p-6">
                        <div className="col-span-1 font-semibold">S. No.</div>
                        <div className="col-span-8 font-semibold">Document</div>
                        <div className="col-span-3 font-semibold text-center">Action</div>
                    </div>
                </div>
                <div className="divide-y divide-gray-100">
                    {data.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-12 gap-4 p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group">
                            <div className="col-span-1 flex items-center">
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <div className="col-span-8 flex items-center">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-blue-500 group-hover:text-blue-600" />
                                    <span className="font-medium text-gray-800 group-hover:text-gray-900">{item}</span>
                                </div>
                            </div>
                            <div className="col-span-3 flex justify-center">
                               <a
                                    href={getTableDocumentLink(item)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Download className="h-4 w-4" />
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const SimpleDropdown = ({ title, data, openYear, setOpenYear, icon: Icon }: { title: string; data: Record<string, string[]>; openYear: string | null; setOpenYear: (year: string | null) => void; icon: React.ComponentType<{ className?: string }> }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, items]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => setOpenYear(openYear === year ? null : year)}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-purple-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    {items.length} items
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-purple-600" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-purple-600" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-purple-50">
                                {items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-4 w-4 text-purple-500" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                        <a
                                            href={getSimpleDocumentLink(item, year)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Download className="h-4 w-4" />
                                            Download
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Header />
            <AccessibilityFeatures />
            <BreadCrumb
                title="IQAC"
                description="Internal Quality Assurance Cell - Enhancing educational standards and academic excellence at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'IQAC', isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white shadow-lg rounded-full px-8 py-4 mb-6">
                        <Award className="h-8 w-8 text-blue-500" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Excellence in Quality Assurance
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Internal Quality <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Assurance Cell</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fostering a culture of excellence and continuous improvement in educational standards at PIET
                    </p>
                </div>

            


                {/* About IQAC - Enhanced */}
                <div className="mb-16">
                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                       <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
          <Users className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-4xl font-bold text-primary">About IQAC</h2>
      </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                The Internal Quality Assurance Cell (IQAC) of Poornima Institute of Engineering and Technology, Jaipur was established in <strong>2018</strong> to enhance teaching-learning quality and sustain the institution's performance. The IQAC focuses on fostering a culture of belongingness and stakeholder participation in all activities.
                            </p>
                            <p className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                                The institute's vision emphasizes <strong>"Pursuit of Excellence in Education,"</strong> followed by Research and Entrepreneurship. The institution practices outcome-based education, student-centric experimental learning, participative learning, and problem-solving methodologies to improve learning experiences.
                            </p>
                            <p className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                The IQAC monitors academic activities, channels efforts, and institutionalizes good practices towards academic excellence. The IQAC includes the head of the institution, senior faculty members, distinguished educationalists, industry experts, local management representatives, and stakeholders.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision and Mission - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                                    <Target className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vision</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To practice benchmarks and sustainable quality mechanism in academic and research initiative and process.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Mission</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To be the driving force for enhancing quality and channelize efforts towards academic excellence.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To establish student Learning-Centric environment by use of ICT tools for teaching and learning process.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To assess the progress through audit system and ensure transparent operations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To ensure adequacy of support structure and build association with stakeholders.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* IQAC Strategies and Functions - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                                <Target className="h-6 w-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">IQAC Strategies</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            {[
                                'Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks',
                                'The relevance and quality of academic and research programmes',
                                'Equitable access to and affordability of academic programmes',
                                'Optimization and integration of modern methods of teaching and learning',
                                'The credibility of evaluation procedures',
                                'Ensuring the adequacy, maintenance and proper allocation of support structure'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                          
                    

                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl">
                                <BookOpen className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">IQAC Functions</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            {[
                                'Development and application of quality benchmarks/parameters',
                                'Facilitating the creation of a learner-centric environment',
                                'Arrangement for feedback response from stakeholders',
                                'Dissemination of information on various quality parameters',
                                'Organization of workshops, seminars on quality related themes',
                                'Documentation of various programs/activities leading to quality improvement',
                                'Development and maintenance of institutional database through MIS'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                                            {/* IQAC Coordinator's Message Section */}
                <div className="w-full py-10 px-4 md:px-8">
                <h2 className="text-5xl text-primary font-bold mb-8 text-left max-w-8xl mx-auto">
                    Message from Coordinator (IQAC)
                </h2>

                {/* FULL-WIDTH GRID WRAPPER */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    
                    {/* LEFT: President Info (1 column) */}
                    <div className="md:col-span-1 text-center md:text-left">
                        <LazyImage
                        src={presidentInfo.imageUrl}
                        alt={presidentInfo.name}
                        className="rounded-full w-80 h-80 mx-auto md:mx-0 object-cover shadow-lw"
                        />

                        <h3 className="text-3xl font-bold mt-4">
                        {presidentInfo.name}
                        </h3>

                        <p className="text-neutral-600 text-lg">
                        {presidentInfo.designation}
                        </p>
                    </div>

                    {/* RIGHT: Message (2 columns) */}
                    <div className="md:col-span-2">
                        <div className="prose lg:prose-lg max-w-none text-justify">
                        {presidentInfo.message}
                        </div>
                    </div>

                    </div>
                </div>
                </div>



                {/* Tables with modern design */}
                 <div >
                <ModernTable title="Quality Policy" data={['Quality Policy']} icon={FileText} />
                </div>
                <ModernTable title="IQAC Constitution" data={iqacConstitution} icon={Users} />
                <ModernTable title="IQAC Handbook" data={['IQAC Handbook']} icon={BookOpen} />
                <ModernTable title="IQAC Initiatives" data={iqacInitiatives} icon={Target} />
                <ModernTable title="Institute Perspective Plan" data={['Institute Perspective Plan']} icon={FileText} />

                {/* Enhanced Triple Nested Dropdown for IQAC Meetings */}
                <TripleNestedDropdown 
                    title="IQAC Meetings & Action Taken Reports"
                    data={iqacMeetingsData}
                    openYear={openMeetingsYear}
                    setOpenYear={setOpenMeetingsYear}
                    openSubItem={openMeetingsSubItem}
                    setOpenSubItem={setOpenMeetingsSubItem}
                    icon={Users}
                />

                {/* Enhanced Quality Activities with table structure */}
                <QualityActivitiesDropdown 
                    title="IQAC Quality Activities"
                    data={iqacQualityActivities}
                    openYear={openQualityYear}
                    setOpenYear={setOpenQualityYear}
                    icon={Award}
                />

                <ModernTable title="Annual Quality Assurance Report (AQAR)" data={aqarReports} icon={FileText} />
                <ModernTable title="Strategic Development Plan" data={strategicPlans} icon={Target} />
                <ModernTable title="Feedback Policy" data={['Feedback Policy']} icon={FileText} />
                <ModernTable title="Feedback Forms" data={feedbackForms} icon={FileText} />
                <ModernTable title="Feedback Analysis & ATR" data={feedbackAnalysis} icon={FileText} />
                <ModernTable title="Students Satisfaction Survey" data={studentSurveys} icon={Users} />

                <ModernDoubleDropdown 
                    title="FDP's/Workshops for Faculty & Staff"
                    data={fdpWorkshopsData}
                    openYear={openFDPYear}
                    setOpenYear={setOpenFDPYear}
                    openItem={openFDPItem}
                    setOpenItem={setOpenFDPItem}
                    icon={BookOpen}
                />

                <SimpleDropdown 
                    title="Academic Calendars"
                    data={academicCalendars}
                    openYear={openCalendarYear}
                    setOpenYear={setOpenCalendarYear}
                    icon={Calendar}
                />

                <ModernTable title="Academic & Administrative Audit" data={academicAudits} icon={FileText} />

                <SimpleDropdown 
                    title="Environment Audits Certificates"
                    data={environmentAuditCertificates}
                    openYear={openEnvCertYear}
                    setOpenYear={setOpenEnvCertYear}
                    icon={Award}
                />

                <SimpleDropdown 
                    title="Environment Audits Reports"
                    data={environmentAuditReports}
                    openYear={openEnvReportYear}
                    setOpenYear={setOpenEnvReportYear}
                    icon={FileText}
                />

                <ModernTable title="Best Practices" data={bestPractices} icon={Award} />
                <ModernTable title="Best Practices Evidence" data={bestPracticesEvidence} icon={FileText} />
                <ModernTable title="Institute Distinctiveness" data={['Institute Distinctiveness']} icon={Award} />
                <ModernTable title="Institute Distinctiveness Evidences" data={['Institute Distinctiveness Evidences']} icon={FileText} />
                <ModernTable title="Green Initiatives" data={['Green Initiatives']} icon={Award} />
                <ModernTable title="Events on Green Practices" data={['Events on Green Practices']} icon={FileText} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IQACPage;