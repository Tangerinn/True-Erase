# TrueErase
**Wipe with Absolute Trust, Recycle with Intent.**

## 🚀 Overview
[cite_start]TrueErase is a secure data wiping solution designed to facilitate the trustworthy recycling of IT assets[cite: 4]. [cite_start]By combining hardware-level sanitization with software overwriting, it ensures data is irrecoverable, allowing devices to safely re-enter the circular economy[cite: 24, 26, 51, 184].

[cite_start]This project was developed as an idea submission for **Smart India Hackathon 2025** (Problem Statement ID: 25070)[cite: 1, 2, 52].

## 🛠 Key Features
* [cite_start]**One-Click Simplicity:** A user-friendly, single-click tool for immediate and secure data erasure[cite: 33, 124].
* [cite_start]**Offline-First:** Engineered to function on older hardware without requiring an active internet connection[cite: 34, 123].
* [cite_start]**Auditable Digital Proof:** Generates tamper-proof, digitally signed certificates (PAdES/JWS) to verify successful erasure for audit trails[cite: 38, 71, 154].
* [cite_start]**Hybrid Erase Technology:** Provides double assurance by combining hardware-level sanitize logs with software overwriting[cite: 51, 97].
* [cite_start]**Adaptive Sanitization:** Automatically detects hardware types (SSD, NVMe, HDD, or Mobile) to select the most effective NIST-compliant method[cite: 49, 60, 61, 62].

## 💻 Tech Stack
* [cite_start]**Frontend/App Framework:** Qt6 [cite: 82]
* [cite_start]**Backend & Services:** Firebase [cite: 83][cite_start], JWT [cite: 75]
* [cite_start]**Core Security Utilities:** `nvme-cli` [cite: 199][cite_start], `hdparm` [cite: 204][cite_start], `dd` [cite: 203][cite_start], `blockdev` [cite: 196][cite_start], `sg_modes` [cite: 205]
* [cite_start]**Encryption & Certification:** OpenSSL [cite: 118][cite_start], JWS [cite: 118][cite_start], PAdES [cite: 118]
* [cite_start]**Compliance Standards:** NIST SP 800-88 (Rev 1 & 2) [cite: 113, 208]

## 🔄 Process Flow
1.  [cite_start]**Detection:** Automatic identification of all connected storage devices[cite: 60].
2.  [cite_start]**Selection:** Intelligent selection of the sanitization method based on specific hardware architecture[cite: 61].
3.  [cite_start]**Erasure:** Executes Cryptographic Erasure, NVMe Sanitize, or ATA Secure Erase based on the device[cite: 65, 66, 74].
4.  [cite_start]**Verification:** Cleans hidden areas (HPA/DCO) and performs a final overwrite before unmounting the disk[cite: 67, 68, 106].
5.  [cite_start]**Certification:** Issues a verifiable, digitally signed certificate for third-party auditing[cite: 71, 72].

## 🌍 Impact & Benefits
* [cite_start]**Environmental:** Helps divert over 1.75M tonnes of e-waste from landfills annually[cite: 170].
* [cite_start]**Economic:** Unlocks billions in value from hoarded IT assets by enabling safe resale and reuse[cite: 176, 177, 183].
* [cite_start]**Social:** Builds 100% user trust, empowering individuals and enterprises to recycle without fear of data theft[cite: 163, 167].

---
*Note: This repository contains the demo/simulation version of the TrueErase project.*
