export default function CustomLegend() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 32,
        width: "100%",
        marginBottom: 14,
        paddingLeft: 18,
      }}
    >
      {/* Internal Benchmark */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#4F8EF7",
          }}
        />

        <span
          style={{
            color: "#1E293B",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Internal Benchmark
        </span>
      </div>

      {/* Your Study */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#A855F7",
          }}
        />

        <span
          style={{
            color: "#1E293B",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Your Study
        </span>
      </div>
    </div>
  );
}