import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", products: 10, inquiries: 5 },
  { month: "Feb", products: 18, inquiries: 8 },
  { month: "Mar", products: 25, inquiries: 12 },
  { month: "Apr", products: 30, inquiries: 18 },
  { month: "May", products: 40, inquiries: 20 },
  { month: "Jun", products: 48, inquiries: 28 },
  { month: "Jul", products: 58, inquiries: 35 },
  { month: "Aug", products: 65, inquiries: 38 },
  { month: "Sep", products: 74, inquiries: 42 },
  { month: "Oct", products: 82, inquiries: 47 },
  { month: "Nov", products: 90, inquiries: 55 },
  { month: "Dec", products: 110, inquiries: 65 },
];

const DashboardChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Analytics Overview
          </h2>

          <p className="text-slate-500">
            Monthly Products & Inquiries
          </p>

        </div>

      </div>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="product"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
              </linearGradient>

              <linearGradient
                id="inquiry"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>

            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="products"
              stroke="#22C55E"
              fillOpacity={1}
              fill="url(#product)"
            />

            <Area
              type="monotone"
              dataKey="inquiries"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#inquiry)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default DashboardChart;