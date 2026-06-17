export type DetailItem = {
  type: "behavior" | "service" | "insight";
  label: string;
  desc: string;
};

export type JourneyStep = {
  id: string;
  title: string;
  friction?: boolean;
  details: DetailItem[];
};

export const journeySteps: JourneyStep[] = [
  {
    id: "product",
    title: "Product Page",
    details: [
      { type: "behavior", label: "Product viewed", desc: "ลูกค้าเปิดดูหน้าสินค้า" },
      { type: "behavior", label: "Bundle comparison", desc: "เปรียบเทียบ bundle หลายตัวก่อนตัดสินใจ" },
      { type: "insight", label: "Intent not confirmed", desc: "เริ่มสนใจแต่ยังไม่ยืนยัน intent" },
    ],
  },
  {
    id: "cart",
    title: "Cart",
    details: [
      { type: "behavior", label: "Item added to cart", desc: "เพิ่มสินค้าลงตะกร้า" },
      { type: "behavior", label: "Price review", desc: "ตรวจสอบราคาและโปรโมชัน" },
      { type: "insight", label: "Purchase intent rising", desc: "Intent ในการซื้อเพิ่มขึ้นชัดเจน" },
    ],
  },
  {
    id: "checkout",
    title: "Checkout",
    details: [
      { type: "behavior", label: "Checkout started", desc: "เริ่มกระบวนการ checkout" },
      { type: "behavior", label: "Delivery info entered", desc: "กรอกที่อยู่จัดส่งและข้อมูลติดต่อ" },
      { type: "insight", label: "High-intent customer", desc: "ลูกค้า high-intent เข้าสู่ขั้นตอนสำคัญ" },
    ],
  },
  {
    id: "payment",
    title: "Payment",
    friction: true,
    details: [
      { type: "behavior", label: "Payment retry x3", desc: "ลูกค้าพยายามชำระเงิน 3 ครั้ง" },
      { type: "behavior", label: "User clicks Pay repeatedly", desc: "ลูกค้ากดปุ่มชำระเงินหลายครั้ง" },
      { type: "service", label: "Payment service timeout", desc: "ระบบชำระเงินตอบสนองล่าช้า" },
      { type: "insight", label: "Possible friction before completion", desc: "อาจมีความติดขัดก่อนการชำระเงินสำเร็จ" },
    ],
  },
  {
    id: "confirmed",
    title: "Order Confirmed",
    details: [
      { type: "behavior", label: "Order completed", desc: "ออเดอร์สำเร็จ" },
      { type: "behavior", label: "Thank you page reached", desc: "ลูกค้าเข้าถึงหน้า thank you" },
      { type: "insight", label: "Journey completed", desc: "Journey เสร็จสมบูรณ์" },
    ],
  },
];
