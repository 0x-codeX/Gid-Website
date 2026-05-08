//import React from "react";

const JOIN_LINK =
  "https://chat.whatsapp.com/J67zNDlTPBDFFbq1PJnfzW";

const IMG =
  {
    logo: "/images/gid-logo.png",
    earbudsChina:
      "/images/earbuds-china.jpg",
    earbudsNg:
      "/images/earbuds-nigeria.jpg",
    washChina:
      "/images/washing-china.jpg",
    washNg:
      "/images/washing-nigeria.jpg",
    boxes:
      "/images/delivery-boxes.jpg",
  };

const gold =
  "#C9A227";
const goldDark =
  "#8a6d0e";
const navyCard =
  "rgba(13, 28, 46, 0.97)";
const tealBorder =
  "rgba(0, 200, 220, 0.28)";
const tealGlow =
  "rgba(0, 180, 210, 0.12)";
const blue =
  "#4db3ff";
const textMuted =
  "#8aaccc";
const font1 =
  "'Barlow Condensed', Impact, sans-serif";
const font2 =
  "'Barlow', Arial, sans-serif";

const btnStyle =
  {
    display:
      "block",
    textAlign:
      "center",
    fontFamily:
      font1,
    fontWeight:
      "900",
    fontSize:
      "15px",
    letterSpacing:
      "2.5px",
    textTransform:
      "uppercase",
    color:
      "#0a1225",
    background: `linear-gradient(135deg, ${goldDark} 0%, #f0d060 45%, ${gold} 100%)`,
    padding:
      "14px 28px",
    borderRadius:
      "999px",
    textDecoration:
      "none",
    boxShadow:
      "0 4px 28px rgba(201,162,39,0.5)",
    cursor:
      "pointer",
    transition:
      "transform 0.15s ease, box-shadow 0.15s ease",
  };

const cardStyle =
  {
    flex: 1,
    background:
      navyCard,
    border: `1px solid ${tealBorder}`,
    borderRadius:
      "12px",
    padding:
      "12px 10px",
    boxShadow: `0 0 18px ${tealGlow}`,
  };

const compRowStyle =
  {
    background:
      navyCard,
    border: `1px solid ${tealBorder}`,
    borderRadius:
      "14px",
    padding:
      "13px",
    marginBottom:
      "10px",
    boxShadow: `0 0 18px ${tealGlow}`,
  };

function GoldButton({
  children,
}) {
  return (
    <a
      href={
        JOIN_LINK
      }
      target="_blank"
      rel="noopener noreferrer"
      style={
        btnStyle
      }
      onMouseEnter={(
        e,
      ) => {
        e.currentTarget.style.transform =
          "scale(1.02)";
        e.currentTarget.style.boxShadow =
          "0 6px 36px rgba(201,162,39,0.65)";
      }}
      onMouseLeave={(
        e,
      ) => {
        e.currentTarget.style.transform =
          "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 4px 28px rgba(201,162,39,0.5)";
      }}
    >
      {
        children
      }
    </a>
  );
}

function VsBadge() {
  return (
    <div
      style={{
        width:
          "26px",
        height:
          "26px",
        borderRadius:
          "50%",
        background:
          "#ffffff",
        color:
          "#0a1422",
        display:
          "flex",
        alignItems:
          "center",
        justifyContent:
          "center",
        fontWeight:
          "900",
        fontSize:
          "9px",
        flexShrink: 0,
        fontFamily:
          font1,
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      VS
    </div>
  );
}

function PhaseCard({
  icon,
  phase,
  title,
  children,
  accentColor = gold,
}) {
  return (
    <div
      style={
        cardStyle
      }
    >
      <div
        style={{
          display:
            "flex",
          alignItems:
            "flex-start",
          gap: "8px",
          marginBottom:
            "7px",
        }}
      >
        <span
          style={{
            fontSize:
              "20px",
            flexShrink: 0,
          }}
        >
          {
            icon
          }
        </span>
        <div>
          <p
            style={{
              color:
                accentColor,
              fontWeight:
                "800",
              fontSize:
                "9px",
              letterSpacing:
                "1px",
              textTransform:
                "uppercase",
              fontFamily:
                font1,
              margin: 0,
            }}
          >
            {
              phase
            }
          </p>
          <p
            style={{
              color:
                "#ffffff",
              fontWeight:
                "800",
              fontSize:
                "12px",
              lineHeight:
                "1.25",
              margin: 0,
              fontFamily:
                font1,
            }}
          >
            {
              title
            }
          </p>
        </div>
      </div>
      <div
        style={{
          color:
            textMuted,
          fontSize:
            "10px",
          lineHeight:
            "1.55",
          fontFamily:
            font2,
        }}
      >
        {
          children
        }
      </div>
    </div>
  );
}

function SectionLabel({
  children,
}) {
  return (
    <p
      style={{
        color:
          gold,
        fontWeight:
          "800",
        fontSize:
          "12px",
        letterSpacing:
          "3px",
        textTransform:
          "uppercase",
        textAlign:
          "center",
        marginBottom:
          "14px",
        fontFamily:
          font1,
      }}
    >
      {
        children
      }
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{
        height:
          "1px",
        background: `linear-gradient(90deg, transparent, ${tealBorder}, transparent)`,
        margin:
          "4px 0 16px",
      }}
    />
  );
}

export default function GIDLandingPage() {
  return (
    <div
      style={{
        minHeight:
          "100vh",
        background:
          "radial-gradient(ellipse at 50% 0%, #0e2540 0%, #060e1a 65%)",
        display:
          "flex",
        justifyContent:
          "center",
        alignItems:
          "flex-start",
      }}
    >
      <div
        style={{
          width:
            "100%",
          maxWidth:
            "430px",
          background:
            "linear-gradient(180deg, #0c1e30 0%, #07111c 100%)",
          border: `1px solid ${tealBorder}`,
          boxShadow: `0 0 60px ${tealGlow}, inset 0 0 60px rgba(0,0,0,0.25)`,
          overflow:
            "hidden",
          position:
            "relative",
        }}
      >
        {/* Top shimmer */}
        <div
          style={{
            height:
              "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,200,220,0.6) 50%, transparent 100%)",
          }}
        />

        {/* ── HERO ── */}
        <section
          style={{
            textAlign:
              "center",
            padding:
              "28px 22px 26px",
            borderBottom: `1px solid ${tealBorder}`,
          }}
        >
          <img
            src={
              IMG.logo
            }
            alt="GID Business Tutorials"
            style={{
              width:
                "150px",
              height:
                "150px",
              objectFit:
                "cover",
              borderRadius:
                "50%", // This creates the circular shape
              border: `0px solid ${gold}`, // Optional: adds a nice gold ring around it
              marginBottom:
                "16px",
            }}
          />
          <p
            style={{
              color:
                gold,
              fontWeight:
                "800",
              fontSize:
                "12px",
              letterSpacing:
                "2.5px",
              textTransform:
                "uppercase",
              fontFamily:
                font1,
              margin:
                "0 0 6px",
            }}
          >
            GID
            Business
            Tutorials:
          </p>
          <h1
            style={{
              color:
                "#ffffff",
              fontWeight:
                "900",
              fontSize:
                "28px",
              lineHeight:
                "1.15",
              textTransform:
                "uppercase",
              fontFamily:
                font1,
              margin:
                "0 0 10px",
            }}
          >
            Master
            China
            Importation
            <br />
            Local
            Sales
            &amp;
            White
            Labeling
            <br />
          </h1>
          <p
            style={{
              color:
                textMuted,
              fontSize:
                "13px",
              lineHeight:
                "1.5",
              fontFamily:
                font2,
              margin:
                "0 0 22px",
            }}
          >
            Learn
            to
            Import,
            Build
            Your
            Brand,
            <br />
            and
            Profit
            in
            Nigeria
          </p>
          <GoldButton>
            Click
            Here
            to
            Join
          </GoldButton>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section
          style={{
            padding:
              "20px 15px",
          }}
        >
          <SectionLabel>
            Why
            Choose
            Us?
          </SectionLabel>

          {/* Earbuds row */}
          <div
            style={
              compRowStyle
            }
          >
            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  flex: 1.3,
                }}
              >
                <div
                  style={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: "5px",
                  }}
                >
                  <img
                    src={
                      IMG.earbudsChina
                    }
                    alt="Earbuds on 1688"
                    style={{
                      flex: 1,
                      height:
                        "99px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "8px",
                      minWidth: 0,
                    }}
                  />
                  <VsBadge />
                  <img
                    src={
                      IMG.earbudsNg
                    }
                    alt="Earbuds on Jumia"
                    style={{
                      flex: 1,
                      height:
                        "99px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "8px",
                      minWidth: 0,
                    }}
                  />
                </div>
                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    marginTop:
                      "5px",
                    padding:
                      "0 2px",
                  }}
                >
                  <span
                    style={{
                      color:
                        blue,
                      fontSize:
                        "9px",
                      fontWeight:
                        "700",
                      fontFamily:
                        font1,
                    }}
                  >
                    ¥7.50
                    ~₦1,655
                  </span>
                  <span
                    style={{
                      color:
                        gold,
                      fontSize:
                        "9px",
                      fontWeight:
                        "700",
                      fontFamily:
                        font1,
                    }}
                  >
                    ₦7,550
                    on
                    Jumia
                  </span>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                }}
              >
                <p
                  style={{
                    color:
                      gold,
                    fontWeight:
                      "800",
                    fontSize:
                      "12px",
                    fontFamily:
                      font1,
                    margin:
                      "0 0 3px",
                  }}
                >
                  Sourcing
                  vs
                  Retail:
                </p>
                <p
                  style={{
                    color:
                      "#ffffff",
                    fontSize:
                      "11px",
                    margin: 0,
                    fontFamily:
                      font2,
                  }}
                >
                  See
                  the
                  massive
                  profit
                  gap!
                </p>
              </div>
            </div>
          </div>

          {/* Washing machine + boxes row */}
          <div
            style={
              compRowStyle
            }
          >
            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  flex: 1.3,
                }}
              >
                <div
                  style={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: "5px",
                  }}
                >
                  <img
                    src={
                      IMG.washChina
                    }
                    alt="Washing machine on 1688"
                    style={{
                      flex: 1,
                      height:
                        "99px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "8px",
                      minWidth: 0,
                    }}
                  />
                  <VsBadge />
                  <img
                    src={
                      IMG.washNg
                    }
                    alt="Washing machine on Jumia"
                    style={{
                      flex: 1,
                      height:
                        "99px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "8px",
                      minWidth: 0,
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                }}
              >
                <p
                  style={{
                    color:
                      gold,
                    fontWeight:
                      "800",
                    fontSize:
                      "12px",
                    fontFamily:
                      font1,
                    margin:
                      "0 0 4px",
                  }}
                >
                  Proof
                  of
                  Receipt:
                </p>
                <img
                  src={
                    IMG.boxes
                  }
                  alt="Delivery boxes from China"
                  style={{
                    width:
                      "100%",
                    height:
                      "48px",
                    objectFit:
                      "cover",
                    borderRadius:
                      "8px",
                    marginBottom:
                      "4px",
                  }}
                />
                <p
                  style={{
                    color:
                      "#ffffff",
                    fontSize:
                      "10px",
                    margin: 0,
                    fontFamily:
                      font2,
                    lineHeight:
                      "1.4",
                  }}
                >
                  Consignments
                  received
                  regularly
                  from
                  China.
                </p>
              </div>
            </div>
          </div>

          <Divider />

          {/* Phase cards row 1 */}
          <div
            style={{
              display:
                "flex",
              gap: "8px",
              marginBottom:
                "8px",
            }}
          >
            <PhaseCard
              icon="⚙️"
              phase="Phase 1:"
              title="Foundations & Setup"
            >
              Config
              Alipay,
              1688,
              SkyCargo.
              Essential
              app
              setups.
            </PhaseCard>
            <PhaseCard
              icon="🔍"
              phase="Phase 2:"
              title="Sourcing Secrets"
            >
              Sourcing
              for
              resale,
              finding
              winning
              products,
              understanding
              certified
              merchants.
            </PhaseCard>
          </div>

          {/* Phase cards row 2 */}
          <div
            style={{
              display:
                "flex",
              gap: "8px",
              marginBottom:
                "22px",
            }}
          >
            <PhaseCard
              icon="🤖"
              phase="Phases 7–9:"
              title="Sales Enhancement with AI"
            >
              We'll
              teach
              you
              to
              use
              AI
              to
              enhance
              sales
              on
              Jumia,
              Jiji,
              WhatsApp,
              Konga
              &amp;
              more.
            </PhaseCard>
            <PhaseCard
              icon="👑"
              phase="Phase 10:"
              title="Venture into White Labeling"
              accentColor="#b07dff"
            >
              <span
                style={{
                  color:
                    gold,
                  fontWeight:
                    "700",
                }}
              >
                Chinese Products meets Nigerian Brands!{" "}
              </span>
              Move
              beyond
              importer
              to
              brand
              owner,
              like
              Lontor
              or
              Polystar.
            </PhaseCard>
          </div>

          {/* CTA 2 */}
          <GoldButton>
            Join
            GID
            Tutorials
            VIP
            Group
          </GoldButton>

          {/* Footer */}
          <div
            style={{
              textAlign:
                "center",
              padding:
                "18px 0 10px",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                justifyContent:
                  "center",
                alignItems:
                  "center",
                gap: "14px",
                marginBottom:
                  "14px",
              }}
            >
              {/* Instagram */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  textMuted
                }
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                />
              </svg>
              {/* Facebook */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  textMuted
                }
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              {/* TikTok */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={
                  textMuted
                }
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
              <span
                style={{
                  color:
                    gold,
                  fontWeight:
                    "800",
                  fontSize:
                    "12px",
                  fontFamily:
                    font1,
                  letterSpacing:
                    "1px",
                }}
              >
                @gidtutorials
              </span>
            </div>
            <GoldButton>
              Enroll
              Now!
            </GoldButton>
          </div>
        </section>

        {/* Bottom shimmer */}
        <div
          style={{
            height:
              "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,200,220,0.6) 50%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
