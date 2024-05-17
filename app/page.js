import Card from '@/components/Card.js';
export default function Home() {
  return (
    <>
      <div className="bg-red-900 absolute top-1/2 left-1/2 flex gap-1">
        <Card name="Sofi"
              image="/static/images/sofi.jpeg"
        />
        <Card name="Karuta"
              image="/static/images/karuta.png"
        />
      </div>
    </>
  );
}
