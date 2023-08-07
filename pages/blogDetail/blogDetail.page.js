import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/layout/Header"));
import styles from "../../styles/blogDetail.module.css";
import { Section } from "../../components/UI";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

function Index({ blogDetailData }) {
  return (
    <>
      <Head>
        <title>GrabTern | Blogs</title>
      </Head>
      <Header />
      <main>
        <Section>
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-mb-[10rem]">
            {/* Title of blog */}
            <p className="tw-font-bold tw-text-black tw-text-4xl">GrabTern</p>
            <div className="tw-flex tw-flex-col-1 tw-gap-[0.5rem] tw-pt-[2rem]">
              <span className="tw-pt-[0.2rem]">
                <FaUserCircle />
              </span>
              <p className="tw-text-black tw-font-normal">Nick Hilton</p>
              <p className="tw-font-normal">- &nbsp; Jul 25</p>
            </div>
            <div className="tw-mt-[3rem] hover:tw-bg-gray-300 hover:tw-border-4 tw-border-black  tw-rounded-lg tw-border-gray-400 tw-border-2 tw-p-5">
              <Image
                className=""
                src="/grabtern_meta_img.webp"
                alt="img"
                width={700}
                height={700}
              />
            </div>
            {/* Description of blog */}
            <p className="tw-subpixel-antialiased tw-leading-relaxed tw-tracking-normal tw-text-black tw-mt-[5rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              duis at consectetur lorem donec massa sapien faucibus et. Posuere
              lorem ipsum dolor sit. Sagittis vitae et leo duis ut diam. Urna
              nec tincidunt praesent semper feugiat. Ullamcorper morbi tincidunt
              ornare massa. Urna neque viverra justo nec ultrices dui sapien
              eget mi. Arcu non odio euismod lacinia at quis. Pellentesque elit
              ullamcorper dignissim cras tincidunt. Eu sem integer vitae justo.
              Duis at consectetur lorem donec massa sapien faucibus. Dignissim
              cras tincidunt lobortis feugiat vivamus. Mattis pellentesque id
              nibh tortor. Pulvinar elementum integer enim neque volutpat ac
              tincidunt vitae. Dignissim enim sit amet venenatis urna cursus
              eget. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.
              Urna molestie at elementum eu facilisis sed odio morbi.
              Pellentesque diam volutpat commodo sed. Convallis a cras semper
              auctor neque vitae tempus quam pellentesque. Faucibus scelerisque
              eleifend donec pretium vulputate sapien nec. Id velit ut tortor
              pretium viverra suspendisse. Consequat interdum varius sit amet.
              Condimentum id venenatis a condimentum vitae. Suspendisse sed nisi
              lacus sed viverra tellus in hac. Condimentum mattis pellentesque
              id nibh tortor id aliquet lectus. Condimentum id venenatis a
              condimentum vitae. Enim sed faucibus turpis in eu. Ut morbi
              tincidunt augue interdum velit euismod in. Vitae turpis massa sed
              elementum tempus egestas sed sed risus. Donec ac odio tempor orci
              dapibus ultrices in iaculis. Consectetur adipiscing elit
              pellentesque habitant morbi tristique senectus et netus. Dictum
              varius duis at consectetur lorem. Mauris rhoncus aenean vel elit
              scelerisque mauris. Tellus integer feugiat scelerisque varius.
              Morbi blandit cursus risus at ultrices mi tempus imperdiet. Et
              pharetra pharetra massa massa ultricies mi. Bibendum ut tristique
              et egestas quis. Vulputate ut pharetra sit amet aliquam. Nisl
              purus in mollis nunc sed. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris nunc. Sem fringilla ut morbi tincidunt
              augue interdum velit. Pretium vulputate sapien nec sagittis.
              Auctor urna nunc id cursus metus aliquam eleifend mi in. Quam
              viverra orci sagittis eu volutpat odio facilisis mauris. Aliquam
              vestibulum morbi blandit cursus risus at ultrices mi tempus. In
              arcu cursus euismod quis viverra. Ullamcorper a lacus vestibulum
              sed arcu non odio. Ut placerat orci nulla pellentesque dignissim
              enim sit. Ultricies tristique nulla aliquet enim tortor. Tellus
              elementum sagittis vitae et leo duis ut diam. Eu scelerisque felis
              imperdiet proin fermentum leo. Turpis tincidunt id aliquet risus
              feugiat in ante. Felis donec et odio pellentesque diam volutpat.
              Cursus sit amet dictum sit. Morbi blandit cursus risus at. Risus
              ultricies tristique nulla aliquet enim tortor. Vulputate dignissim
              suspendisse in est. Leo in vitae turpis massa sed elementum tempus
              egestas sed. Porttitor eget dolor morbi non arcu risus quis
              varius. Non arcu risus quis varius quam quisque id diam. Ultrices
              mi tempus imperdiet nulla. Lacinia quis vel eros donec ac odio
              tempor. Sagittis orci a scelerisque purus semper eget duis at.
              Ipsum nunc aliquet bibendum enim facilisis. Dictum sit amet justo
              donec enim diam. Phasellus egestas tellus rutrum tellus
              pellentesque. Dignissim diam quis enim lobortis scelerisque
              fermentum dui faucibus. In mollis nunc sed id semper risus.
              Euismod nisi porta lorem mollis aliquam ut. Eget mauris pharetra
              et ultrices neque ornare aenean euismod. Nibh sit amet commodo
              nulla.
            </p>
            {/* Tags for blog */}
            <div className="sm:tw-flex-row tw-flex tw-gap-5 tw-mt-[3rem]">
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                GrabTern
              </button>
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                Open Source
              </button>
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                Contributors
              </button>
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                Opportunity
              </button>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

export default Index;
