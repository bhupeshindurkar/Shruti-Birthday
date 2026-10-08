import jsPDF from 'jspdf';
import { birthdayData } from '../config/birthdayData';

/**
 * Generates an ultra-luxurious, printable commemorative PDF birthday card
 * customized for Shruti Lanjewar.
 */
export const generateShrutiBirthdayPdf = (): void => {
  // A4 Landscape format: 297mm x 210mm
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 297;
  const pageHeight = 210;

  // 1. Soft Luxury Background Fill (#fff8f9)
  doc.setFillColor(255, 247, 249);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative soft rose header banner
  doc.setFillColor(253, 236, 241);
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Decorative soft champagne footer banner
  doc.setFillColor(255, 248, 238);
  doc.rect(0, pageHeight - 22, pageWidth, 22, 'F');

  // 2. Multi-tier Gold & Burgundy Borders
  // Outer border
  doc.setDrawColor(212, 175, 55); // Rich Gold
  doc.setLineWidth(1.2);
  doc.roundedRect(12, 12, pageWidth - 24, pageHeight - 24, 6, 6, 'S');

  // Inner hairline burgundy border
  doc.setDrawColor(184, 80, 110); // Rose burgundy
  doc.setLineWidth(0.4);
  doc.roundedRect(16, 16, pageWidth - 32, pageHeight - 32, 4, 4, 'S');

  // Delicate corner ornaments
  const drawCornerFiligree = (x: number, y: number, angle: number) => {
    doc.saveGraphicsState();
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.8);
    // Draw small diamond corner emblem
    doc.lines(
      [
        [3, 0],
        [0, 3],
        [-3, 0],
        [0, -3],
      ],
      x,
      y,
      [1, 1],
      'S'
    );
    doc.restoreGraphicsState();
  };

  drawCornerFiligree(20, 20, 0);
  drawCornerFiligree(pageWidth - 20, 20, 90);
  drawCornerFiligree(20, pageHeight - 20, 270);
  drawCornerFiligree(pageWidth - 20, pageHeight - 20, 180);

  // 3. Header Kicker
  doc.setFont('times', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(168, 68, 98);
  doc.text('A  S P E C I A L  D A Y  •  A  S P E C I A L  P E R S O N', pageWidth / 2, 22, {
    align: 'center',
  });

  // 4. Milestone Ribbon Badge
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.6);
  doc.roundedRect(pageWidth / 2 - 40, 36, 80, 12, 6, 6, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(184, 80, 110);
  doc.text('✦  GOLDEN 21ST CELEBRATION  ✦', pageWidth / 2, 43.5, {
    align: 'center',
  });

  // 5. Main Heading: "Happy 21st Birthday"
  doc.setFont('times', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(69, 20, 34); // Deep Burgundy
  doc.text('Happy 21st Birthday', pageWidth / 2, 66, {
    align: 'center',
  });

  // 6. Name: "Shruti Lanjewar"
  doc.setFont('times', 'italic');
  doc.setFontSize(36);
  doc.setTextColor(184, 51, 88); // Radiant Rose
  doc.text(birthdayData.name, pageWidth / 2, 82, {
    align: 'center',
  });

  // Small floral divider
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.6);
  doc.line(pageWidth / 2 - 35, 88, pageWidth / 2 + 35, 88);
  doc.setFillColor(212, 175, 55);
  doc.circle(pageWidth / 2, 88, 1.2, 'F');

  // 7. Date & Timeline Badge
  doc.setFont('courier', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(140, 37, 69);
  doc.text('22 • 10 • 2005   —   22 • 10 • 2026', pageWidth / 2, 97, {
    align: 'center',
  });

  // 8. Body Message (Heartfelt & Professional)
  doc.setFont('times', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(92, 26, 45);

  const line1 =
    'Some people make ordinary moments feel special. Today is about celebrating one of those people.';
  const line2 =
    'May this milestone year bring you happiness, beautiful memories, meaningful moments,';
  const line3 =
    'endless smiles, and everything your wonderful heart has ever wished for.';

  doc.text(line1, pageWidth / 2, 114, { align: 'center' });
  doc.text(line2, pageWidth / 2, 123, { align: 'center' });
  doc.text(line3, pageWidth / 2, 132, { align: 'center' });

  // 9. Personal Signature Note
  doc.setFont('times', 'italic');
  doc.setFontSize(16);
  doc.setTextColor(184, 51, 88);
  doc.text('“Keep smiling. Keep shining. Keep being you.”', pageWidth / 2, 146, {
    align: 'center',
  });

  // 10. Commemorative Seal Emblem (Bottom Center)
  const sealY = 168;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.8);
  doc.circle(pageWidth / 2, sealY, 13, 'FD');

  doc.setDrawColor(184, 80, 110);
  doc.setLineWidth(0.3);
  doc.circle(pageWidth / 2, sealY, 11.5, 'S');

  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(140, 37, 69);
  doc.text('21', pageWidth / 2, sealY + 2, { align: 'center' });

  doc.setFont('times', 'normal');
  doc.setFontSize(6);
  doc.setTextColor(168, 68, 98);
  doc.text('YEARS OF GRACE', pageWidth / 2, sealY + 6, { align: 'center' });

  // 11. Footer Text with Developer Credit
  doc.setFont('times', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(130, 48, 72);
  doc.text(
    'Celebrated on 22 October 2026  •  Engineered with love by Bhupesh Indurkar (Full Stack Developer) for Shruti Lanjewar',
    pageWidth / 2,
    198,
    {
      align: 'center',
    }
  );

  // Save the professional PDF
  doc.save('Shruti_Lanjewar_21st_Birthday_Luxury_Card.pdf');
};
