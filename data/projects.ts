import { Project } from "@/types";
import { hunar } from "./projects/hunar";
import { mailEcommerce } from "./projects/mail-ecommerce";
import { moc } from "./projects/moc";
import { uboldi } from "./projects/uboldi";
import { drawseq } from "./projects/drawseq";
import { sistemaEclesiastico } from "./projects/sistema-eclesiastico";
import { zencillo } from "./projects/zencillo";
import { zencilloFidelizacion } from "./projects/zencillo-fidelizacion";

export const projects: Project[] = [
    hunar,
    mailEcommerce,
    moc,
    uboldi,
    drawseq,
    sistemaEclesiastico,
    zencillo,
    zencilloFidelizacion,
];
