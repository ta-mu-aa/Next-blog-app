import Image from "next/image";

export default async function Article({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=1`}
        width={1280}
        height={300}
        alt=""
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        タイトルが入ります
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>本文が入ります</p>
      </div>
    </div>
  );
}