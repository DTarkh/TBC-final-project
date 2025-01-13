import { redirect } from 'next/navigation';

export default function HomePage() {
  console.log("Redirecting to en/sign-in");
  redirect('en/sign-in');
}