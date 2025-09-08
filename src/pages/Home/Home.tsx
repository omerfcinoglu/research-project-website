import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/react";
import Hero from "../HomeContent/Hero";
import HomePage_Texts from "@/constants/HomePageTexts";
import { Members } from "@/components/Members";

export const Home = () => {
    return (
        <DefaultLayout>
            <Divider className="my-4" />
            <Hero
                title={HomePage_Texts.project_title}
            />
            <Members />
        </DefaultLayout>
    );
}
