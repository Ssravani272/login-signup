// Validation helpers according to the brief
export const onlyAlphabets = (v) => /^[A-Za-z ]+$/.test(String(v).trim());

// Username/password: alphanumerics + . _ - @ allowed, 4-20 chars
export const userLike = (v) => /^[A-Za-z0-9._@-]{4,20}$/.test(String(v));

export const gmailOnly = (v) => /^[A-Za-z0-9._%+-]+@gmail\.com$/.test(String(v));

export const phoneWithCC = (v) => /^\+\d{1,3}\s?\d{7,14}$/.test(String(v));

export const required = (v) => String(v || '').trim().length > 0;
