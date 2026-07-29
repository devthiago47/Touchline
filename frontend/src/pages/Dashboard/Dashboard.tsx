import { useState } from "react";
import DashboardHome from "@/components/DashboardHome/DashboardHome";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import DashboardNavigation from "@/components/DashboardNavigation/DashboardNavigation";

export default function Dashboard() {
    const [currentTab, setCurrentTab] = useState("Início");

    return (
        <main>
            <DashboardHeader />

            <DashboardNavigation
                currentTab={currentTab}
                onChangeTab={setCurrentTab}
            />

            <section style={{ padding: "20px" }}>
                {currentTab === "Início" && <DashboardHome />}

                {currentTab === "Elenco" && <h2>Elenco</h2>}

                {currentTab === "Escritório" && <h2>Escritório</h2>}

                {currentTab === "Configurações" && <h2>Configurações</h2>}
            </section>
        </main>
    );
}