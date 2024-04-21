import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-white max-w-7xl mx-auto ">
      <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
          Colaborá con nosotros!
        </h2>
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <div className="mt-9">
              <div className="border border-slate-300 p-4 text-slate-800 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-slate-700">
                  Transferencia bancaria
                </h2>
                <div className="flex flex-col gap-y-3 mt-8 text-lg  font-medium text-slate-600">
                  <p className="">Banco: BROU</p>
                  <p>Número de cuenta actual: 110133846-00001</p>
                  <p>Para transferencia desde otros bancos: 11013384600001</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-9">
              <div className="border border-slate-300 p-4 text-slate-800 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-slate-700">
                  También aceptamos crypto
                </h2>
                <p className="mt-5">
                  Aceptamos donaciones desde la red de Ethereum o compatible con
                  la EVM, como Arbitrum, Polygon, Binance Smart Chain, etc.
                </p>
                <div className="flex flex-col gap-y-3 mt-8 text-lg  font-medium text-slate-600">
                  <p className="overflow-auto">
                    Billetera: 0x1aC6a323322F3Dad7B7E286d57b6a654cb2a46d1
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-9">
              <div className="border border-slate-300 p-4 text-slate-800 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-slate-700">
                  También aceptamos Paypal
                </h2>
                <p className="mt-5">
                  Haz click en la siguiente imágen para donar a través de Paypal
                </p>
                <a
                  href={`https://www.paypal.com/ncp/payment/DMYTWZMQ3DZK8`}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <div className="rounded-xl px-12  border border-slate-300 w-fit mt-5 cursor-pointer">
                    <img src="/paypal.svg" alt="PayPal" className="w-24 h-24" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
