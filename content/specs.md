---
title: Undum Technical Specifications
description: 'Technical specifications for Undum, an AI chip for the healthcare industry.'
---

## General

**Technical process**: 5-7nm FinFET

**Architecture**: RISC-V

**Clock speed**: 1.5GHz

**Memory**: 4GB LPDDR4

**Power consumption**: 20W peak

**PCIe**: 4x Gen5

## Machine Learning

**Systolic array size**: 4x(128x128)

**Data types**: Int8, Int16, Bf16, Fp8

**Frameworks**: TensorFlow2, PyTorch, ONNX

## Software package

- Quantization tool
- Proprietary compiler
- Drivers

## Chipset block diagram

![Chipset block diagram](/ai-chip/images/block-diagram.png)
