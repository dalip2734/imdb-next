import Image from 'next/image';

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image width={800} height={500} src="spinner.svg" alt="loading..." />
    </div>
  );
}
