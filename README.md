# TrueErase 
**Wipe with Absolute Trust, Recycle with Intent.**

## Overview
TrueErase is a secure data wiping solution designed to facilitate the trustworthy recycling of IT assets. By combining hardware-level sanitization with software overwriting, it ensures data is irrecoverable, allowing devices to safely re-enter the circular economy.

This project was developed as an idea submission for **Smart India Hackathon 2025** (Problem Statement ID: 25070).

## Key Features
* **One-Click Simplicity:** A user-friendly, single-click tool for immediate and secure data erasure.
* **Offline-First:** Engineered to function on older hardware without requiring an active internet connection.
* **Auditable Digital Proof:** Generates tamper-proof, digitally signed certificates (PAdES/JWS) to verify successful erasure for audit trails.
* **Hybrid Erase Technology:** Provides double assurance by combining hardware-level sanitize logs with software overwriting.
* **Adaptive Sanitization:** Automatically detects hardware types (SSD, NVMe, HDD, or Mobile) to select the most effective NIST-compliant method.

## Tech Stack
* **Frontend/App Framework:** Qt6
* **Backend & Services:** Firebase, JWT
* **Core Security Utilities:** `nvme-cli`, `hdparm`, `dd`, `blockdev`, `sg_modes`
* **Encryption & Certification:** OpenSSL, JWS, PAdES
* **Compliance Standards:** NIST SP 800-88 (Rev 1 & 2)

## Process Flow
1. **Detection:** Automatic identification of all connected storage devices.
2. **Selection:** Intelligent selection of the sanitization method based on specific hardware architecture.
3. **Erasure:** Executes Cryptographic Erasure, NVMe Sanitize, or ATA Secure Erase based on the device.
4. **Verification:** Cleans hidden areas (HPA/DCO) and performs a final overwrite before unmounting the disk.
5. **Certification:** Issues a verifiable, digitally signed certificate for third-party auditing.

## Impact & Benefits
* **Environmental:** Helps divert over 1.75M tonnes of e-waste from landfills annually.
* **Economic:** Unlocks ₹50,000+ Cr worth of hoarded IT assets by enabling safe resale and reuse.
* **Social:** Builds 100% user trust, empowering individuals and enterprises to recycle without fear of data theft.

---
*Note: This repository contains the demo/simulation version of the TrueErase project.*
