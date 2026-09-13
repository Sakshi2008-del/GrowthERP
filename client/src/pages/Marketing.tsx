import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Image as ImageIcon,
  MapPin,
  Megaphone,
  Play,
  Sparkles,
  Target,
  Upload,
  Users,
  Wand2,
} from "lucide-react";

type Region = {
  name: string;
  language: string;
  audience: string;
  context: string;
};

const regions: Region[] = [
  {
    name: "Maharashtra",
    language: "Marathi",
    audience: "Urban & family buyers",
    context: "Maharashtrian household context",
  },
  {
    name: "West Bengal",
    language: "Bengali",
    audience: "Family & lifestyle buyers",
    context: "Bengali cultural context",
  },
  {
    name: "Uttar Pradesh",
    language: "Hindi",
    audience: "Families & local buyers",
    context: "North Indian household context",
  },
  {
    name: "Bihar",
    language: "Hindi",
    audience: "Family & value-conscious buyers",
    context: "Bihar regional context",
  },
  {
    name: "Gujarat",
    language: "Gujarati",
    audience: "Families & business households",
    context: "Gujarati cultural context",
  },
];

export default function MarketingPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");

  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    "Maharashtra",
    "West Bengal",
  ]);

  const [referenceFile, setReferenceFile] = useState<File | null>(null);

  const [analyzed, setAnalyzed] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);

  const toggleRegion = (name: string) => {
    setSelectedRegions((current) =>
      current.includes(name)
        ? current.filter((region) => region !== name)
        : [...current, name]
    );
  };

  const analyzeProduct = () => {
    if (!productName.trim() && !description.trim()) {
      setAnalyzed(false);
      return;
    }

    setAnalyzed(true);
  };

  const generateCampaign = () => {
    if (selectedRegions.length === 0) return;

    setCampaignGenerated(true);
  };

  return (
    /*
      IMPORTANT:
      This wrapper owns the scrolling.
      The previous version used min-h-full, which could prevent the
      Marketing page from getting its own scroll area inside Layout.
    */
    <div className="h-full min-h-0 overflow-y-auto overflow-x-hidden bg-[#f5f2e8] text-[#101412]">
      <div className="min-h-full w-full">
        {/* =========================================================
            TOP HEADER
        ========================================================= */}
        <header className="sticky top-0 z-20 border-b border-[#d8d3c4] bg-[#f5f2e8]/95 backdrop-blur-md">
          <div className="flex h-14 items-center justify-between px-6">
            <div>
              <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#176b43]">
                <Megaphone className="h-3 w-3" />
                Marketing Engine
              </div>

              <h1 className="mt-0.5 text-lg font-black tracking-tight">
                Product Studio
              </h1>
            </div>

            <div className="hidden items-center gap-2 rounded-md border border-[#d8d3c4] bg-[#faf9f4] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#176b43] sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5ca47d]" />
              AI Marketing Ready
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8">
          {/* =========================================================
              HERO
          ========================================================= */}
          <section className="pt-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-sm bg-[#176b43] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-white">
              <Sparkles className="h-3 w-3" />
              AI Growth Platform
            </div>

            <h2 className="max-w-3xl text-[42px] font-black leading-[0.98] tracking-[-0.04em] sm:text-[48px]">
              From product
              <br />
              <span className="font-serif font-normal italic text-[#176b43]">
                to market.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-[12px] leading-6 text-[#69716c]">
              Give GrowthERP your product and reference creative. The
              Marketing Engine understands the product, identifies the target
              audience, and prepares region-specific campaign concepts.
            </p>
          </section>

          {/* =========================================================
              PRODUCT STUDIO
          ========================================================= */}
          <section className="mt-7 grid gap-4 lg:grid-cols-[1fr_0.95fr]">
            {/* PRODUCT INFORMATION */}
            <div className="border border-[#d8d3c4] bg-[#faf9f4] p-6">
              <div className="mb-7 flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[#b8d7c6] bg-[#e8f4ed]">
                  <Target className="h-3.5 w-3.5 text-[#176b43]" />
                </div>

                <div>
                  <h3 className="text-sm font-black">
                    Product Information
                  </h3>

                  <p className="mt-0.5 text-[9px] text-[#777d78]">
                    Tell GrowthERP what you want to market.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <Field label="Product Name">
                  <input
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Example: Organic Honey"
                    className="growth-input"
                  />
                </Field>

                <Field label="Product Description">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your product, its benefits and what makes it different..."
                    rows={5}
                    className="growth-input resize-none"
                  />
                </Field>

                <Field label="Target Audience">
                  <input
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="Example: Families, young professionals, students"
                    className="growth-input"
                  />
                </Field>

                <Field label="Reference Image / Video">
                  <label className="flex cursor-pointer items-center justify-between border border-dashed border-[#cfc9b9] bg-[#f7f5ed] px-4 py-3 transition hover:border-[#176b43]">
                    <div className="flex min-w-0 items-center gap-3">
                      <Upload className="h-4 w-4 shrink-0 text-[#176b43]" />

                      <div className="min-w-0">
                        <p className="truncate text-[10px] font-bold">
                          {referenceFile
                            ? referenceFile.name
                            : "Upload reference creative"}
                        </p>

                        <p className="mt-0.5 text-[8px] text-[#858a86]">
                          Product image or reference video
                        </p>
                      </div>
                    </div>

                    <span className="ml-3 shrink-0 text-[8px] font-black uppercase tracking-wider text-[#176b43]">
                      Browse
                    </span>

                    <input
                      type="file"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={(e) =>
                        setReferenceFile(e.target.files?.[0] ?? null)
                      }
                    />
                  </label>
                </Field>

                <button
                  onClick={analyzeProduct}
                  className="flex w-full items-center justify-center gap-2 bg-[#176b43] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-white transition hover:bg-[#125836]"
                >
                  <Wand2 className="h-3.5 w-3.5" />
                  Analyze Product
                </button>
              </div>
            </div>

            {/* AI PRODUCT UNDERSTANDING */}
            <div className="relative min-h-[480px] overflow-hidden bg-[#171918] p-6 text-white">
              <div className="absolute inset-0 opacity-30">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-[#176b43]">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#63b88d]">
                      AI Analysis
                    </p>

                    <h3 className="text-sm font-black">
                      Product Understanding
                    </h3>
                  </div>
                </div>

                {!analyzed ? (
                  <div className="flex min-h-[390px] flex-col items-center justify-center px-5 text-center">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#4c5952]">
                      <Sparkles className="h-5 w-5 text-[#63b88d]" />
                    </div>

                    <h4 className="text-sm font-black">
                      Waiting for product
                    </h4>

                    <p className="mt-2 max-w-xs text-[9px] leading-5 text-[#8f9892]">
                      Enter your product information and click{" "}
                      <span className="text-[#63b88d]">
                        Analyze Product
                      </span>{" "}
                      to generate an AI marketing profile.
                    </p>
                  </div>
                ) : (
                  <div className="mt-8 space-y-3">
                    <AnalysisRow
                      title="Product"
                      value={productName || "Product identified"}
                    />

                    <AnalysisRow
                      title="Audience"
                      value={
                        targetAudience ||
                        "Audience profile generated from input"
                      }
                    />

                    <AnalysisRow
                      title="Core Value"
                      value={
                        description
                          ? "Benefits and differentiators extracted"
                          : "Value proposition pending"
                      }
                    />

                    <AnalysisRow
                      title="Creative Direction"
                      value="Regional adaptation recommended"
                    />

                    <div className="mt-5 border border-[#2e4037] bg-[#1d2923] p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#63b88d]" />

                        <span className="text-[9px] font-black uppercase tracking-wider">
                          Marketing profile ready
                        </span>
                      </div>

                      <p className="mt-2 text-[9px] leading-5 text-[#a7b0aa]">
                        The prototype has enough product context to prepare
                        regional campaign concepts.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* =========================================================
              REGIONAL INTELLIGENCE
          ========================================================= */}
          <section className="mt-14">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#176b43]">
                  Regional Intelligence
                </p>

                <h3 className="mt-1 text-xl font-black tracking-tight">
                  Choose your markets
                </h3>

                <p className="mt-1 text-[10px] text-[#777d78]">
                  Adapt the campaign to different Indian regions and
                  audiences.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[9px] font-semibold text-[#777d78]">
                <Globe2 className="h-3 w-3 text-[#176b43]" />
                {selectedRegions.length} regions selected
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {regions.map((region) => {
                const selected = selectedRegions.includes(region.name);

                return (
                  <button
                    key={region.name}
                    onClick={() => toggleRegion(region.name)}
                    className={`relative min-h-[148px] border p-4 text-left transition ${
                      selected
                        ? "border-[#5ca47d] bg-[#e6f2eb]"
                        : "border-[#d8d3c4] bg-[#faf9f4] hover:border-[#b7b0a0]"
                    }`}
                  >
                    {selected && (
                      <div className="absolute right-3 top-3">
                        <CheckCircle2 className="h-3 w-3 text-[#176b43]" />
                      </div>
                    )}

                    <div className="mb-4 flex h-6 w-6 items-center justify-center rounded border border-[#d2ccbc] bg-[#fffdf7]">
                      <MapPin className="h-3 w-3 text-[#176b43]" />
                    </div>

                    <h4 className="text-[11px] font-black">
                      {region.name}
                    </h4>

                    <div className="mt-2 flex items-center gap-1 text-[8px] font-semibold text-[#176b43]">
                      <Sparkles className="h-2.5 w-2.5" />
                      {region.language}
                    </div>

                    <p className="mt-3 text-[8px] leading-4 text-[#666d68]">
                      {region.audience}
                    </p>

                    <div className="mt-3 border-t border-[#d7d2c5] pt-2 text-[7px] leading-3 text-[#858a86]">
                      {region.context}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* =========================================================
              CAMPAIGN STUDIO
          ========================================================= */}
          <section className="mt-6 border border-[#d8d3c4] bg-[#faf9f4] p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded border border-[#b8d7c6] bg-[#e8f4ed]">
                    <Wand2 className="h-3.5 w-3.5 text-[#176b43]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#176b43]">
                      Campaign Studio
                    </p>

                    <h3 className="mt-0.5 text-lg font-black">
                      Create regional campaign concepts
                    </h3>
                  </div>
                </div>

                <p className="mt-3 max-w-2xl text-[10px] leading-5 text-[#777d78]">
                  GrowthERP keeps the core product message consistent while
                  adapting language, visuals, cultural context and audience
                  communication for each selected region.
                </p>
              </div>

              <button
                onClick={generateCampaign}
                disabled={selectedRegions.length === 0}
                className="flex shrink-0 items-center justify-center gap-2 bg-[#9db9aa] px-5 py-3 text-[9px] font-black text-white transition hover:bg-[#176b43] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Sparkles className="h-3 w-3" />

                {campaignGenerated
                  ? "Campaign Ready"
                  : "Generate Campaign"}
              </button>
            </div>
          </section>

          {/* =========================================================
              GENERATED REGIONAL PREVIEWS
          ========================================================= */}
          {campaignGenerated && (
            <section className="mt-6">
              <div className="mb-4">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#176b43]">
                  Campaign Output
                </p>

                <h3 className="mt-1 text-xl font-black">
                  Regional creative concepts
                </h3>

                <p className="mt-1 text-[10px] text-[#777d78]">
                  Example previews generated from the selected regional
                  context.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {selectedRegions.map((regionName) => {
                  const region = regions.find(
                    (item) => item.name === regionName
                  );

                  if (!region) return null;

                  return (
                    <div
                      key={region.name}
                      className="overflow-hidden border border-[#d8d3c4] bg-[#faf9f4]"
                    >
                      <div className="relative flex h-36 items-center justify-center bg-[#202321]">
                        <ImageIcon className="h-7 w-7 text-[#63b88d]" />

                        <div className="absolute left-3 top-3 bg-[#176b43] px-2 py-1 text-[7px] font-black uppercase text-white">
                          Regional Concept
                        </div>

                        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[8px] text-white">
                          <Play className="h-3 w-3" />
                          Creative Preview
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-[11px] font-black">
                            {region.name}
                          </h4>

                          <span className="text-[8px] font-semibold text-[#176b43]">
                            {region.language}
                          </span>
                        </div>

                        <p className="mt-3 text-[9px] leading-4 text-[#666d68]">
                          {productName || "Your product"} adapted for{" "}
                          {region.audience.toLowerCase()}.
                        </p>

                        <div className="mt-3 flex items-center gap-2 border-t border-[#ded9cc] pt-3">
                          <CheckCircle2 className="h-3 w-3 text-[#176b43]" />

                          <span className="text-[8px] font-semibold text-[#555b57]">
                            Core product message preserved
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* =========================================================
              MARKETING → SALES
          ========================================================= */}
          <section className="relative mt-6 overflow-hidden bg-[#176b43] p-6 text-white">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#a9d3ba]">
                  Marketing → Sales
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight">
                  Turn campaigns into customers.
                </h3>

                <p className="mt-2 max-w-xl text-[10px] leading-5 text-[#c2ddcc]">
                  Once campaigns generate leads, GrowthERP can pass those
                  leads into the Sales Engine for AI-assisted qualification,
                  personalized outreach and human handoff.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <FlowPill text="Campaign" />
                <ChevronRight className="h-3 w-3 text-[#9cc6ac]" />

                <FlowPill text="Leads" />
                <ChevronRight className="h-3 w-3 text-[#9cc6ac]" />

                <FlowPill text="AI Sales" />
                <ChevronRight className="h-3 w-3 text-[#9cc6ac]" />

                <FlowPill text="Human" />
              </div>
            </div>

            <div className="relative mt-5 flex justify-end">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-[8px] font-black uppercase tracking-wider transition hover:bg-white/20"
              >
                Open Sales Engine
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </section>

          {/* =========================================================
              FOOTER
          ========================================================= */}
          <div className="flex flex-col gap-2 py-6 text-[8px] text-[#858a86] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3" />
              Human-in-the-loop growth workflow
            </div>

            <span>GrowthERP Marketing Prototype</span>
          </div>
        </main>
      </div>

      {/* =========================================================
          LOCAL INPUT STYLE
      ========================================================= */}
      <style>{`
        .growth-input {
          width: 100%;
          border: 1px solid #d8d3c4;
          background: #f7f4ea;
          padding: 10px 12px;
          font-size: 10px;
          color: #101412;
          outline: none;
          border-radius: 0;
        }

        .growth-input::placeholder {
          color: #9a9d98;
        }

        .growth-input:focus {
          border-color: #176b43;
          box-shadow: 0 0 0 1px #176b43;
        }
      `}</style>
    </div>
  );
}

/* ===============================================================
   SMALL COMPONENTS
=============================================================== */

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[7px] font-black uppercase tracking-[0.14em] text-[#555b57]">
        {label}
      </label>

      {children}
    </div>
  );
}

function AnalysisRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border border-[#2c3b34] bg-[#1c211f] p-3">
      <p className="text-[7px] font-black uppercase tracking-wider text-[#63b88d]">
        {title}
      </p>

      <p className="mt-1 text-[9px] text-[#d0d7d2]">{value}</p>
    </div>
  );
}

function FlowPill({ text }: { text: string }) {
  return (
    <div className="border border-white/20 bg-white/10 px-3 py-2 text-[8px] font-bold">
      <span className="mr-1 text-[#9ed0b2]">✓</span>
      {text}
    </div>
  );
}