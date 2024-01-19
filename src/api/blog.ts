import { BASE_URL } from "@/config/url";

export async function getListPost(): Promise<Array<DataRespone>> {
  try {
    const req = await fetch(`https://gogroup.vn/wp-json/wp/v2/posts`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
      //   next: { revalidate: 60 },
      cache: "no-cache",
    });

    const res = await req.json();

    return res;
  } catch (error) {
    return Promise.reject();
  }
}
