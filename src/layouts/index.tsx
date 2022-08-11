import { Outlet } from "umi";
import './index.css';
// import OverlayScrollbars from "overlayscrollbars";
// import "overlayscrollbars/css/OverlayScrollbars.css";

// OverlayScrollbars(document.body, {
//   scrollbars: {
//     autoHide: "scroll",
//   },
//   nativeScrollbarsOverlaid: {
//     initialize: false,
//   },
// });

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
