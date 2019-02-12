type Pred = (c: string, k: string) => boolean;
const findFirst = (target: string | string[], key: string, pos: number, pred: Pred, n?: number): number => {
  const k = typeof n !== 'undefined' ? key.substring(0, n) : key;
  let i = 0;
  for (const t of target) {
    if (pos <= i && pred(t, k)) return i;
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
export const findFirstOf = (target: string, key: string, pos = 0, n?: number): number =>
  findFirst(target, key, pos, (c, k) => k.includes(c), n);
const findLast = (target: string, key: string, pos: number, pred: Pred, n?: number): number => {
  const targetArr = Array.from(target);
  // if (targetArr.length <= pos) return -1;
  targetArr.reverse();
  pos = -1 === pos || targetArr.length <= pos ? 0 : targetArr.length - 1 - pos;
  const re = findFirst(targetArr, key, pos, pred, n);
  return -1 === re ? -1 : targetArr.length - 1 - re;
};
// size_type find_last_of(const basic_string& str, size_type pos = npos) const noexcept; // (1) C++11

// size_type find_last_of(const charT* s, size_type pos, size_type n) const;             // (2)
// size_type find_last_of(const charT* s, size_type pos = npos) const;                   // (3)

// size_type find_last_of(charT c, size_type pos = npos) const;                          // (4) C++11

// size_type find_last_of(std::basic_string_view<charT, traits> sv,
//                        size_type pos = npos) const noexcept;                          // (5) C++17
export const findLastof = (target: string, key: string, pos = -1, n?: number): number =>
  findLast(target, key, pos, (c, k) => k.includes(c), n);
// size_type find_first_not_of(const basic_string& str, size_type pos = 0) const noexcept; // (1) C++11

// size_type find_first_not_of(const charT* s, size_type pos, size_type n) const;          // (2)
// size_type find_first_not_of(const charT* s, size_type pos = 0) const;                   // (3)

// size_type find_first_not_of(charT c, size_type pos = 0) const;                          // (4) C++11

// size_type find_first_not_of(std::basic_string_view<charT, traits> sv,
//                             size_type pos = 0) const noexcept;                          // (5) C++17
export const findFirstNotOf = (target: string, key: string, pos = 0, n?: number): number =>
  findFirst(target, key, pos, (c, k) => !k.includes(c), n);
// size_type find_last_not_of(const basic_string& str, size_type pos = npos) const noexcept; // (1) C++11

// size_type find_last_not_of(const charT* s, size_type pos, size_type n) const;             // (2)
// size_type find_last_not_of(const charT* s, size_type pos = npos) const;                   // (3)

// size_type find_last_not_of(charT c, size_type pos = npos) const;                          // (4) C++11

// size_type find_last_not_of(std::basic_string_view<charT, traits> sv,
//                            size_type pos = npos) const noexcept;                          // (5) C++17
export const findLastNotof = (target: string, key: string, pos = -1, n?: number): number =>
  findLast(target, key, pos, (c, k) => !k.includes(c), n);
