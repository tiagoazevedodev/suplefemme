export const formatPhoneNumber = (phoneNumber: string) => {
  // 555332382507 -> +55 (53) 3323-82507
  return `+55 (${phoneNumber.slice(2, 4)}) ${phoneNumber.slice(4, 8)}-${phoneNumber.slice(8)}`;
};