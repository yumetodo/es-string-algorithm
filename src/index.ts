const findFirstOfImpl = (target: string | string[], key: string, pos = 0): number => {
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
// size_type find_first_of(const basic_string& str, size_type pos = 0) const noexcept; // (1) C++11

// size_type find_first_of(const charT* s, size_type pos, size_type n) const;          // (2)
// size_type find_first_of(const charT* s, size_type pos = 0) const;                   // (3)

// size_type find_first_of(charT c, size_type pos = 0) const;                          // (4) C++11

// size_type find_first_of(std::basic_string_view<charT, traits> sv,
//                         size_type pos = 0) const noexcept;                          // (5) C++17
export const findFirstOf = (target: string, key: string, pos = 0): number => {
  return findFirstOfImpl(target, key, pos);
};
// size_type find_last_of(const basic_string& str, size_type pos = npos) const noexcept; // (1) C++11

// size_type find_last_of(const charT* s, size_type pos, size_type n) const;             // (2)
// size_type find_last_of(const charT* s, size_type pos = npos) const;                   // (3)

// size_type find_last_of(charT c, size_type pos = npos) const;                          // (4) C++11

// size_type find_last_of(std::basic_string_view<charT, traits> sv,
//                        size_type pos = npos) const noexcept;                          // (5) C++17
export const findLastof = (target: string, key: string, pos = -1): number => {
  const targetArr = Array.from(target);
  if (targetArr.length <= pos) return -1;
  targetArr.reverse();
  pos = -1 === pos ? 0 : targetArr.length - 1 - pos;
  const re = findFirstOfImpl(targetArr, key, pos);
  return -1 === re ? -1 : targetArr.length - 1 - re;
};
