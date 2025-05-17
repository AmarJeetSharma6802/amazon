import InnerItemsNav from "./ac/InnerItemsNav";

export default function DashboardLayout({ children }) {
    return (
      <div>
        <header style={{height:"60px", background:"white"}}>
          <InnerItemsNav/>
        </header>
        <main>
          {children} 
        </main>
      </div>
    );
  }