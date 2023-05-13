import { useRouter } from "next/router";
import { blogdata } from "../../../public/assets/data";
import React from "react";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));
  return (
    <Layout>
      <div className="max-w-3xl m-auto space-y-8 flex flex-col justify-center">
        <img
          src={post.cover}
          className=" m-auto rounded-tl-3xl rounded-br-3xl"
        />
        <h3 className="text-2xl">{post.title}</h3>
        <p>
          {" "}
          Nulla iaculis convallis fermentum. Suspendisse eget elit mauris.
          Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit.
          Integer non nibh eget arcu malesuada ullamcorper. Quisque congue ante
          in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit
          mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit,
          sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt
          nulla tortor nec purus. Quisque congue ante in consequat auctor. Morbi
          ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a
          urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan,
          ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
          Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi
          et, venenatis finibus velit. Integer non nibh eget arcu malesuada
          ullamcorper.
        </p>
        <Banner />
      </div>
    </Layout>
  );
};

export default SinglePost;
