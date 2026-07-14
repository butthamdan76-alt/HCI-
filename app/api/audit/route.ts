import { NextResponse } from "next/server";

type AuditLead = {
  name?: string;
  email?: string;
  company?: string;
  spend?: string;
};

export async function POST(request: Request) {
  const lead = (await request.json()) as AuditLead;

  if (!lead.email || !lead.email.includes("@")) {
    return NextResponse.json(
      { message: "Please enter a valid business email." },
      { status: 400 }
    );
  }

  const budgetScore =
    lead.spend === "$100k+" ? "priority" : lead.spend === "$50k-$100k" ? "high" : "standard";

  return NextResponse.json({
    message: "Audit request received. A strategist will review the account fit shortly.",
    lead: {
      name: lead.name ?? "",
      company: lead.company ?? "",
      email: lead.email,
      budgetScore
    }
  });
}
