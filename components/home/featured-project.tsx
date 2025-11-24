// components/home/featured-project.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

export function FeaturedProject() {
    return (
        <section className="space-y-6 py-8">
            <div className="flex items-end justify-between gap-4">
                <div className="space-y-1">
                    <Badge variant="outline" className="border-brand-200 text-brand-700 dark:border-brand-800 dark:text-brand-400">
                        Proyecto destacado
                    </Badge>
                    <h2 className="text-2xl font-bold tracking-tight text-brand-900 dark:text-brand-50">
                        MOC — Gestión integral de transporte
                    </h2>
                </div>
                <Button variant="link" className="hidden md:inline-flex h-auto p-0 text-brand-700 dark:text-brand-400" asChild>
                    <Link href="https://moc.mx/" target="_blank" rel="noreferrer">
                        Ver en producción <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                </Button>
            </div>

            <Card className="grid gap-6 p-6 md:grid-cols-[1.5fr_1fr] md:gap-8 overflow-hidden">
                {/* Descripción */}
                <div className="space-y-6">
                    <div className="space-y-4 text-slate-600 dark:text-slate-300">
                        <p className="font-medium text-slate-900 dark:text-slate-100 text-lg">
                            Plataforma para gestionar flota, rutas, órdenes y comunicación
                            operativa en tiempo real.
                        </p>
                        <p className="leading-relaxed">
                            MOC gestiona el ciclo completo del transporte de mercancías:
                            asignación, seguimiento, viaje, comunicación operativa y
                            trazabilidad.
                        </p>

                        <ul className="grid gap-3 sm:grid-cols-2">
                            {[
                                { title: "Flota y rutas", desc: "Control total de activos" },
                                { title: "Órdenes y viajes", desc: "Cronología en tiempo real" },
                                { title: "Comunicación", desc: "Chat y alertas operativas" },
                                { title: "Seguridad", desc: "Roles y auditoría completa" },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-2 text-sm">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                                    <span>
                                        <strong className="font-medium text-slate-900 dark:text-slate-100">{item.title}:</strong>{" "}
                                        {item.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button asChild className="rounded-full">
                        <Link href="/projects/moc">
                            Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Lado técnico */}
                <div className="flex flex-col justify-between rounded-2xl bg-brand-50/50 dark:bg-brand-950/30 p-5 border border-brand-100/50 dark:border-brand-800/30">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-brand-900 dark:text-brand-100 text-sm uppercase tracking-wider mb-3">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["CodeIgniter", "Vue.js", "MySQL", "Google Cloud"].map((tech) => (
                                    <Badge key={tech} variant="secondary" className="bg-white dark:bg-slate-800 border border-brand-100 dark:border-slate-700">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-brand-900 dark:text-brand-100 text-sm uppercase tracking-wider mb-2">
                                Impacto
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>• Reducción de fricción operativa</li>
                                <li>• Mejora en tiempos de entrega</li>
                                <li>• Trazabilidad 100% auditable</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 md:hidden">
                        <Button variant="link" className="h-auto p-0 text-brand-700 dark:text-brand-400" asChild>
                            <Link href="https://moc.mx/" target="_blank" rel="noreferrer">
                                Ver en producción <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    );
}
