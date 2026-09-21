import TopBar from "@/components/global/TopBar";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import FloatingActions from "@/components/global/FloatingActions";
export default function DivisionLayout({active,children}:{active:"solar"|"construction",children:React.ReactNode}){return <><TopBar active={active}/><Header active={active}/><main>{children}</main><FloatingActions/><Footer active={active}/></>}
