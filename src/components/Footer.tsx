import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    const links = [
        { name: "Work", href: "#work" },
        { name: "Services", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    const socials = [
        { name: "Instagram", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Behance", href: "#" },
    ];

    return (
        <footer className="relative z-10 w-full overflow-hidden border-t border-white/10 bg-black pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            ARYN<sup className="text-accent text-2xl md:text-4xl">e</sup>
                        </h2>
                        <p className="text-white/60 max-w-sm text-lg">
                            Designing the visual language of the future.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white/50 mb-6 tracking-widest text-sm uppercase">Navigation</h3>
                        <ul className="flex flex-col gap-4">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/80 hover:text-white transition-colors hover:pl-2 duration-300 inline-block" data-cursorable>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white/50 mb-6 tracking-widest text-sm uppercase">Socials</h3>
                        <ul className="flex flex-col gap-4">
                            {socials.map((social) => (
                                <li key={social.name}>
                                    <a href={social.href} className="group flex items-center text-white/80 hover:text-white transition-colors" data-cursorable>
                                        {social.name}
                                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
                    <p>© {new Date().getFullYear()} ARYN. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">ARYN — A Design Studio by Plot Armour Studio</p>
                </div>
            </div>
        </footer>
    );
}
