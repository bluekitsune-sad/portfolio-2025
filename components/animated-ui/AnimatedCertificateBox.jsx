import { TbCertificate } from "react-icons/tb";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedCertificate = () => (
  <AnimatedBox className="col-span-4 row-span-4 p-0 overflow-hidden">
    <div className="p-8 space-y-6 h-full bg-zinc-800 rounded-lg shadow-lg">
      {/* Title Section */}
      <h3 className="font-semibold text-zinc-100 text-2xl flex items-center gap-3">
        <TbCertificate className="w-6 h-6 text-zinc-400" />
        Certification
      </h3>

      {/* Certificates List */}
      <div className="space-y-6">
        {myInfo.certifications.map((cert, index) => (
          <div key={index} className="relative rounded-lg shadow-md">
            {/* Current Badge (if any) */}
            {cert.current && (
              <div className="absolute top-0 right-0 bg-teal-500 text-zinc-900 text-xs p-1 px-2 rounded">
                Current
              </div>
            )}

            {/* Certificate Details */}
            <h4 className="font-semibold text-zinc-100 text-xl">
              {cert.title}
            </h4>
            <div className="flex justify-between items-center mb-2">
              <p className="text-zinc-300">{cert?.organization}</p>
              <span className="text-xs text-zinc-300 p-1 px-2 rounded">
                {cert?.date}
              </span>
            </div>

            <p className="text-zinc-300 mb-4">{cert?.description}</p>

            {cert?.credentialId && (
              <div className="text-sm text-zinc-400 mb-2">
                <strong>Credential ID:</strong> {cert.credentialId}
              </div>
            )}
            {cert?.url && (
              <div className="text-sm text-zinc-400">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400"
                >
                  Vist Url
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </AnimatedBox>
);
