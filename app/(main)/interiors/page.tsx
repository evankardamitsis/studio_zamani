import { InteriorsGallery } from "../../components/InteriorsGallery";
import { PageLabel } from "../../components/PageLabel";

export default function InteriorsPage() {
  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden lg:overflow-y-hidden bg-[#f8f6ed] lg:pt-10 lg:pr-10 lg:pb-10 flex flex-col">
      <div className="px-6 pt-6 pb-4 lg:px-0 lg:pt-0 lg:pb-4 flex-shrink-0">
        <PageLabel index={1} label="Interiors" className="" />
      </div>
      <div className="flex-1 min-h-0">
        <InteriorsGallery />
      </div>
    </div>
  );
}
