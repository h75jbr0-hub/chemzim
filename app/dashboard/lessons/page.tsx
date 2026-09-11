import { redirect } from 'next/navigation';

export default async function LessonsPage() {
    redirect('/dashboard/curriculum');
}
