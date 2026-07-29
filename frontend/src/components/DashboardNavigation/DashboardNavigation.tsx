interface Props {
  currentTab: string;
  onChangeTab: (tab: string) => void;
}

export default function DashboardNavigation({
  currentTab,
  onChangeTab,
}: Props) {
  const tabs = ["Início", "Elenco", "Escritório", "Configurações"];

  return (
    <nav
      style={{
        display: "flex",
        gap: "8px",
        padding: "10px 20px",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChangeTab(tab)}
          style={{
            padding: "10px 24px",
            fontWeight: "bold",
            cursor: "pointer",
            background: currentTab === tab ? "#F7C600" : "#fff",
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}