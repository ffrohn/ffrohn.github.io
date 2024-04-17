#!/bin/bash
for filename in ./Screenshot*; do convert $filename current.pdf; pdfunite slides.pdf current.pdf slides.pdf;
done
