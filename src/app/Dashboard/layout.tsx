export default function Dashboardlayout({
  children,
  revenue,
  users,
  notifications,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="mb-6">{children}</div>

      {/* Dashboard Content */}
      <div className="flex gap-6">
        {/* Left Column (Users + Revenue stacked) */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="bg-white p-6 rounded-2xl shadow-md">{users}</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">{revenue}</div>
        </div>

       
        <div className="flex-1">
          <div className="bg-white p-6 rounded-2xl shadow-md h-full">
            {notifications}
          </div>
        </div>
      </div>
    </div>
  );
}
