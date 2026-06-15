export function getAllowedAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAllowedAdminEmail(email: string | null | undefined, allowedEmails = getAllowedAdminEmails()) {
  return typeof email === "string" && allowedEmails.includes(email.trim().toLowerCase());
}
