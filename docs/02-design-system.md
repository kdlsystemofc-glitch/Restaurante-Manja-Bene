# 02 — DESIGN SYSTEM: RESTAURANTE MANJA BENE (REVISED - DIVERGENCE REVIEW)

**Project:** Restaurante Manja Bene  
**Niche:** Restaurante / Comida Caseira & Pratos Executivos  
**Location:** Av. Humberto de Alencar Castelo Branco, 3836 - Assunção, São Bernardo do Campo - SP  
**Date:** August 11, 2026  
**Document Version:** 2.0 (Post-Divergence Audit)  
**Phase:** 02 — Design System  

---

## 1. CLIENT-FIRST VISUAL IDENTITY & MATERIALITY

To eliminate all generic restaurant clichés (dark modes, floating burger cutouts, neon badges, generic Bento boxes), the visual language is built directly from the physical materiality of Restaurante Manja Bene:

1. **Barro Queimado (Terracotta Clay `#8D3921`):** Inspired by the hand-fired clay caldeirões used for 19 years to serve the Feijoada completa.
2. **Couve Frequinha (Basil & Herb Green `#1E5336`):** Inspired by fresh sautéed couve, salsa, and green seasonings.
3. **Papel Manteiga & Louça Quente (Warm Parchment `#FFFDF2` & White Ceramic `#FFFFFF`):** High-contrast, clean, warm background representing traditional Brazilian lunch tables.
4. **Queijo Grelhado & Farofa Dourada (Golden Amber `#D48B38`):** Representing the bubbly melted cheese of the Parmegiana and golden farofa.
5. **Tipografia Editorial de Almoço de Raíz (Slab Serif *Bitter* + *Plus Jakarta Sans*):** Warm, tactile, humanistic typography that feels like a traditional Brazilian bistro menu rather than a cold tech app.

---

## 2. COLOR SYSTEM & ACCESSIBILITY MATRIX (WCAG AAA)

```
Background (Warm Parchment):  #FFFDF2  [hsl(45, 80%, 97%)]
Surface (White Ceramic):      #FFFFFF  [hsl(0, 0%, 100%)]
Primary (Terracotta Clay):    #8D3921  [hsl(13, 62%, 34%)]  -> AAA Contrast on Parchment (8.1:1)
Primary Dark:                 #6E2814  [hsl(13, 69%, 25%)]
Accent (Couve Green):         #1E5336  [hsl(147, 47%, 22%)] -> AAA Contrast on Parchment (8.4:1)
Green Container:              #E8F4EC  [hsl(141, 35%, 93%)]
Secondary (Golden Amber):     #D48B38  [hsl(33, 63%, 52%)]
Gold Container:               #FEF3C7  [hsl(48, 96%, 89%)]
Gold Text:                    #78350F  [hsl(22, 78%, 26%)]

Text Primary (Charcoal Ink):  #1C1815  [hsl(24, 14%, 10%)]  -> AAA Contrast (17.2:1)
Text Secondary (Muted Clay):  #5C534C  [hsl(26, 10%, 33%)]  -> AA Contrast (5.1:1)
Border Warm:                  #E8E2D5  [hsl(40, 25%, 87%)]
Border Terracotta Stroke:     #D9C5B2  [hsl(29, 25%, 78%)]
```

---

## 3. TYPOGRAPHY SYSTEM

* **Display & Section Titles:** `Bitter`, serif (Weights: 700 Bold, 800 ExtraBold) — Traditional Brazilian editorial craftsmanship.
* **UI & Headings:** `Plus Jakarta Sans`, sans-serif (Weights: 700 Bold, 800 ExtraBold)
* **Body & Numbers:** `Inter`, sans-serif (Weights: 400 Regular, 500 Medium, 600 SemiBold)

---

## 4. COMPONENT ARCHITECTURE & SURFACES

* **Dish Card Surface:** Crisp White Ceramic (`#FFFFFF`) with subtle Terracotta stroke border (`1px solid #E8E2D5`) and soft warm drop shadow (`0 4px 16px rgba(110, 40, 20, 0.06)`). Hover elevation: `translateY(-3px)` with clay border highlight (`#8D3921`).
* **Primary Conversion Button:** Rich Terracotta Clay (`#8D3921`) with `#FFFFFF` text, Plus Jakarta Sans 700 Bold, soft shadow `0 6px 20px rgba(141, 57, 33, 0.3)`.
* **Secondary Action Button:** Couve Green outline (`2px solid #1E5336`) with `#1E5336` text on `#FFFFFF`.
* **Trust Badges:** 
  * *19 Anos Badge:* Gold container (`#FEF3C7`) + Gold text (`#78350F`) with gold star icon.
  * *Empreendedoras Badge:* Green container (`#E8F4EC`) + Green text (`#1E5336`).

---

DESIGN SYSTEM REVISED — READY FOR COPYWRITING
