// size_type find_first_of(const basic_string& str, size_type pos = 0) const noexcept; // (1) C++11

// size_type find_first_of(const charT* s, size_type pos, size_type n) const;          // (2)
// size_type find_first_of(const charT* s, size_type pos = 0) const;                   // (3)

// size_type find_first_of(charT c, size_type pos = 0) const;                          // (4) C++11

// size_type find_first_of(std::basic_string_view<charT, traits> sv,
//                         size_type pos = 0) const noexcept;                          // (5) C++17
export const findFirstOf = (target: string, key: string, pos = 0): number => {
  let i = 0;
  for (const t of target) {
    if (pos <= i) {
      for (const k of key) {
        if (t === k) return i;
      }
    }
    ++i;
  }
  return -1;
};
