import { auth } from "@/auth";

export default async function LoggedInUser() {
    const session = await auth();

    if (!session?.user) return null;

    let image;
    if (session.user.image) {
        image = session.user.image;
    } else {
        image = "placeholder.svg";
    }

    return (
        <div className="flex max-h-[48px] w-full grow items-center justify-start text-sm gap-1">
            <img className="w-8 ms-2 rounded-full" src={image} alt="User Avatar" />
            <p>{session.user.name}</p>
        </div>
    )
}