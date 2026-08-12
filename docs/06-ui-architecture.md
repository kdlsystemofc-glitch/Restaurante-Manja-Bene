# 06 — UI ARCHITECTURE: RESTAURANTE MANJA BENE (REVISED)

**Project:** Restaurante Manja Bene  
**Niche:** Restaurante / Comida Caseira & Pratos Executivos  
**Location:** Av. Humberto de Alencar Castelo Branco, 3836 - Assunção, São Bernardo do Campo - SP  
**Date:** August 11, 2026  
**Document Version:** 2.0 (Post-Divergence Audit)  
**Phase:** 06 — UI Architecture  
**Approved Direction:** **Direction B — "Almoço de Raíz" (Tactile Ceramic & Brazilian Tabletop)**  

---

## 1. TECHNICAL SPECIFICATIONS & LAYOUT GRID

* **Design Tokens:**
  * Background: `#FFFDF2` (Warm Sunlit Parchment)
  * Primary CTA: `#8D3921` (Terracotta Clay)
  * Primary Dark Hover: `#6E2814`
  * Accent Secondary: `#1E5336` (Couve Green)
  * Highlight Accent: `#D48B38` (Golden Amber)
  * Text Primary: `#1C1815` (Charcoal Ink)
  * Text Secondary: `#5C534C` (Muted Clay)
  * Border Warm: `#E8E2D5`
* **Typography:**
  * Section Headers: `Bitter`, serif (700 Bold, 800 ExtraBold)
  * UI Buttons & Headings: `Plus Jakarta Sans`, sans-serif (700 Bold, 800 ExtraBold)
  * Body Text: `Inter`, sans-serif (400, 500, 600)

---

## 2. 9-SECTION STRUCTURE

1. **`#announcement-bar`:** Top notice bar (`#FEF3C7`) showing address, operating hours, and direct WhatsApp.
2. **`#main-header`:** Sticky header (`rgba(255, 253, 242, 0.95)` with backdrop blur), brand logotype, "Desde 2007" gold badge, section jump links, and Terracotta WhatsApp CTA button.
3. **`#hero`:** Asymmetric 2-column editorial split. Left: 4.6★ rating badge, H1 slogan headline (*"Dê um olé na sua fome com o verdadeiro tempero caseiro de São Bernardo"*), supporting copy, primary Terracotta WhatsApp CTA, secondary menu CTA, pre-order microcopy note. Right: `imgi_16.webp` (Feijoada em caldeirão de barro) in rounded ceramic container with terracotta stroke border and floating badge.
4. **`#proof-bar`:** 4-card credibility strip (19 Years, 4.6★ Google rating, R$ 20–40, 100% Female Leadership).
5. **`#flagship-dishes`:** 2-card spotlight for *Filé à Parmegiana Especial* (`imgi_15.webp`) and *Feijoada Completa no Caldeirão* (`imgi_16.webp`) with verified customer quotes.
6. **`#daily-menu`:** Responsive grid showcasing 8 home-cooked dishes (*Strogonoff*, *Carne Acebolada*, *Feijão Tropeiro*, *Rabada*, *Bife c/ Espaguete*, *Frango c/ Polenta*, *Panquecas*, *Peixe à Milanesa*) with real dish photography.
7. **`#friction-relief`:** 3-column ordering guidance card addressing peak-hour delivery wait times (*Encomenda Antecipada até 11h30*, *Retirada no Balcão*, *Almoço no Salão*).
8. **`#social-proof`:** Real, unedited Google Maps review cards from verified customers (Douglas, Brunna Lopes).
9. **`#location-info`:** 2-column split with address, phone lines, interactive Google Maps route button, and physical store photo (`imgi_44.jpg`).
10. **`#footer`:** Dark charcoal closing container with final high-urgency WhatsApp CTA and female entrepreneurship attribution.
11. **`#mobile-sticky-bar`:** Fixed bottom bar for single-thumb mobile conversion.

---

UI ARCHITECTURE REVISED — READY FOR IMPLEMENTATION
