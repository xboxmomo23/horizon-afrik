import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { CONTACT, SOCIAL } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-primary-900 text-primary-100 text-sm">
      <div className="container flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent-400" />
            {CONTACT.address.street}, {CONTACT.address.zip} {CONTACT.address.city}
          </span>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition">
            <Mail className="h-3.5 w-3.5 text-accent-400" />
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white transition">
            <Phone className="h-3.5 w-3.5 text-accent-400" />
            {CONTACT.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link href={SOCIAL.facebook} aria-label="Facebook" className="hover:text-accent-400 transition">
            <FacebookIcon className="h-4 w-4" />
          </Link>
          <Link href={SOCIAL.linkedin} aria-label="LinkedIn" className="hover:text-accent-400 transition">
            <LinkedinIcon className="h-4 w-4" />
          </Link>
          <Link href={SOCIAL.instagram} aria-label="Instagram" className="hover:text-accent-400 transition">
            <InstagramIcon className="h-4 w-4" />
          </Link>
          <Link href={SOCIAL.youtube} aria-label="YouTube" className="hover:text-accent-400 transition">
            <YoutubeIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
