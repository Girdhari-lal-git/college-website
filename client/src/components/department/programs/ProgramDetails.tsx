import { motion, AnimatePresence } from "framer-motion";
import { Program } from "./types";

import OverviewPanel from "./OverviewPanel";
import CareerPanel from "./CareerPanel";
import PEOPanel from "./PEOPanel";
import PSOPanel from "./PSOPanel";

interface ProgramDetailsProps {
    program: Program;
}

const ProgramDetails = ({ program }: ProgramDetailsProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
            >
                <OverviewPanel program={program} />

                <CareerPanel careers={program.careers} />

                <PEOPanel peos={program.peos} />

                <PSOPanel psos={program.psos} />
            </motion.div>
        </AnimatePresence>
    );
};

export default ProgramDetails;