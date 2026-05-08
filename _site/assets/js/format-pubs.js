// Reformat publication author strings APA-style and bold lab members.
// Source data is BibTeX-style "Last, First and Last2, First2" — converted to
// "Last, F., Last2, F., & Last3, F." with current/former lab members bolded.
//
// To add a lab member: append to LAB_MEMBERS below.
// `firsts: null` means "match any first name with this surname".
// `firsts: ['Jun']` means only match when the first name starts with one of these.

(function () {
  const LAB_MEMBERS = [
    { last: 'Dortdivanlioglu', firsts: null },
    { last: 'Madadi',          firsts: null },
    { last: 'Ali Madadi',      firsts: null },   // bibtex sometimes treats "Ali Madadi" as compound surname
    { last: 'Wang',            firsts: ['Jun', 'J'] },
    { last: 'Mursel',          firsts: ['Seda', 'S'] },
    { last: 'Rastogi',         firsts: ['Animesh', 'A'] },
    { last: 'Stratton',        firsts: ['Cambry', 'C'] },
    { last: 'Valverde-González', firsts: null },
    { last: 'Valverde-Gonzalez', firsts: null },
    { last: 'Noh',             firsts: ['Richard', 'R'] },
    { last: 'Giolando',        firsts: ['Patrick', 'P'] },   // co-advised
    { last: 'Altunsu',         firsts: ['Elif', 'E'] },
    { last: 'Bakiler',         firsts: null },   // joined the lab in 2023
  ];

  // Per-paper exceptions: surnames listed here are NOT bolded on that paper,
  // even if they're in LAB_MEMBERS above. Use for authors who weren't in the
  // lab when a particular paper was written.
  const NON_LAB_OVERRIDES = {
    "bakiler2021beams": ["Bakiler"],                                // before Bakiler joined the lab
    "valverde2025inf":  ["Valverde-González", "Valverde-Gonzalez"], // worked on this after leaving the lab
  };

  function parseAuthor(s) {
    s = s.trim();
    if (s.toLowerCase() === 'others') return { last: 'others', first: '', isOthers: true };
    if (s.includes(',')) {
      const idx = s.indexOf(',');
      return { last: s.slice(0, idx).trim(), first: s.slice(idx + 1).trim() };
    }
    // Fallback: "First Last"
    const parts = s.split(/\s+/);
    return { last: parts[parts.length - 1], first: parts.slice(0, -1).join(' ') };
  }

  function toInitials(first) {
    if (!first) return '';
    return first
      .split(/[\s.\-]+/)
      .filter(Boolean)
      .map(w => w.charAt(0).toUpperCase() + '.')
      .join(' ');
  }

  function isLab(a, pubId) {
    if (pubId && NON_LAB_OVERRIDES[pubId] && NON_LAB_OVERRIDES[pubId].includes(a.last)) {
      return false;
    }
    return LAB_MEMBERS.some(m => {
      if (m.last !== a.last) return false;
      if (m.firsts === null) return true;
      if (!m.firsts.length) return false;
      const fc = (a.first || '').charAt(0).toUpperCase();
      return m.firsts.some(f => {
        if (!f) return false;
        if (a.first.startsWith(f)) return true;
        return fc === f.charAt(0).toUpperCase() && f.length <= 2;
      });
    });
  }

  function formatOne(a, pubId) {
    if (a.isOthers) return 'et al.';
    const init = toInitials(a.first);
    const text = init ? `${a.last}, ${init}` : a.last;
    return isLab(a, pubId) ? `<strong>${text}</strong>` : text;
  }

  function formatAPA(authors, pubId) {
    const formatted = authors.map(a => formatOne(a, pubId));
    if (formatted.length === 0) return '';
    if (formatted.length === 1) return formatted[0];
    if (formatted.length === 2) return formatted[0] + ', &amp; ' + formatted[1];
    // Trailing "et al." takes a comma but no ampersand
    const last = formatted[formatted.length - 1];
    const head = formatted.slice(0, -1).join(', ');
    if (last === 'et al.') return head + ', et al.';
    return head + ', &amp; ' + last;
  }

  function reformatAll() {
    document.querySelectorAll('.pub-authors').forEach(el => {
      const raw = el.textContent.trim();
      if (!raw || el.dataset.formatted === '1') return;
      const authors = raw.split(/\s+and\s+/).map(parseAuthor);
      el.innerHTML = formatAPA(authors, el.dataset.pubId);
      el.dataset.formatted = '1';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reformatAll);
  } else {
    reformatAll();
  }
})();
